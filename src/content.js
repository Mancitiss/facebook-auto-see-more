/**
 * Facebook Auto See More - Content Script
 * Automatically expands all "See more" buttons in the Facebook feed
 * using a MutationObserver to catch dynamically loaded content.
 */

(function () {
  'use strict';

  // Avoid running multiple instances if the script is somehow injected twice
  if (window.__fbAutoSeeMoreRunning) return;
  window.__fbAutoSeeMoreRunning = true;

  let isEnabled = true;
  let lastRun = 0;
  let observer = null;
  let intervalId = null;

  const THROTTLE_MS = 800;
  const POLL_INTERVAL_MS = 2000;
  const RENDER_DELAY_MS = 300;

  /**
   * Find and click all un-expanded "See more" buttons on the page.
   */
  const clickSeeMore = () => {
    if (!isEnabled) return;

    const now = Date.now();
    if (now - lastRun < THROTTLE_MS) return;
    lastRun = now;

    const buttons = document.querySelectorAll(
      'div[role="button"]:not([data-fb-auto-expanded="true"])'
    );

    let clickedCount = 0;

    buttons.forEach(button => {
      const text = button.textContent.trim();
      if (SEE_MORE_VARIANTS.includes(text)) {
        // Mark so we don't click it again
        button.dataset.fbAutoExpanded = 'true';
        button.click();
        clickedCount++;
      }
    });

    if (clickedCount > 0) {
      console.log(`[FB Auto See More] Expanded ${clickedCount} "See more" button(s)`);
    }
  };

  /**
   * Start observing DOM mutations so we react to new posts loading.
   */
  const startObserver = () => {
    if (observer) observer.disconnect();

    const feedContainer =
      document.querySelector('div[role="feed"]') || document.body;

    observer = new MutationObserver(mutations => {
      const shouldCheck = mutations.some(mutation =>
        mutation.addedNodes.length > 0 ||
        (mutation.type === 'attributes' &&
          SEE_MORE_VARIANTS.some(variant => 
            mutation.target.textContent?.includes(variant)
          ))
      );

      if (shouldCheck) {
        setTimeout(clickSeeMore, RENDER_DELAY_MS);
      }
    });

    observer.observe(feedContainer, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
  };

  /**
   * Full start: run once immediately, start observer, and set up safety-net poll.
   */
  const start = () => {
    isEnabled = true;
    startObserver();
    clickSeeMore();
    intervalId = setInterval(clickSeeMore, POLL_INTERVAL_MS);
    console.log('[FB Auto See More] Started');
  };

  /**
   * Stop everything.
   */
  const stop = () => {
    isEnabled = false;
    if (observer) observer.disconnect();
    if (intervalId) clearInterval(intervalId);
    console.log('[FB Auto See More] Stopped');
  };

  // Re-attach the observer if Facebook does a client-side navigation
  // (it's a SPA, so the feed container may be replaced)
  let navObserver = new MutationObserver(() => {
    if (isEnabled) {
      const feed = document.querySelector('div[role="feed"]');
      if (feed && !feed.dataset.fbObserved) {
        feed.dataset.fbObserved = 'true';
        startObserver();
        clickSeeMore();
      }
    }
  });

  navObserver.observe(document.body, { childList: true, subtree: false });

  // Expose controls so the popup can toggle the script on/off via messaging
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.action === 'getStatus') {
      sendResponse({ enabled: isEnabled });
    } else if (message.action === 'enable') {
      start();
      sendResponse({ enabled: true });
    } else if (message.action === 'disable') {
      stop();
      sendResponse({ enabled: false });
    }
    return true; // keep message channel open for async sendResponse
  });

  // Read saved state from storage, then kick off accordingly
  chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
    if (enabled) {
      start();
    } else {
      console.log('[FB Auto See More] Staying off (user disabled)');
    }
  });
})();
