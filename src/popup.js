/**
 * Popup script — communicates with the content script via chrome.tabs.sendMessage.
 */

const toggleBtn = document.getElementById('toggle-btn');
const statusText = document.getElementById('status-text');
const mainControls = document.getElementById('main-controls');
const notFacebook = document.getElementById('not-facebook');

/**
 * Query the active tab and check if we're on Facebook.
 */
async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

function isFacebookTab(tab) {
  return tab?.url && /^https:\/\/(?:(?:www|web)\.)?facebook\.com(?:[/?#]|$)/.test(tab.url);
}

function updateUI(enabled) {
  toggleBtn.checked = enabled;
  statusText.textContent = enabled ? 'Enabled' : 'Disabled';
  statusText.style.color = enabled ? '#1877f2' : '#65676b';
}

async function init() {
  const tab = await getActiveTab();

  if (!isFacebookTab(tab)) {
    mainControls.style.display = 'none';
    notFacebook.style.display = 'block';
    return;
  }

  // Read saved state from storage (source of truth)
  const { enabled } = await chrome.storage.local.get({ enabled: true });
  updateUI(enabled);

  // Re-enable transitions after the browser has painted the initial state.
  // Double rAF: first fires before the next paint, second fires after it's committed.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove('no-anim');
    });
  });
}

toggleBtn.addEventListener('change', async () => {
  const tab = await getActiveTab();
  if (!isFacebookTab(tab)) return;

  const enabled = toggleBtn.checked;

  // Persist the new state
  await chrome.storage.local.set({ enabled });

  // Tell the live content script to react immediately
  const action = enabled ? 'enable' : 'disable';
  try {
    await chrome.tabs.sendMessage(tab.id, { action });
  } catch {
    // Tab may have just navigated; ignore
  }

  updateUI(enabled);
});

init();
