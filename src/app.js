const attractorScreen = document.querySelector("#attractor-screen");
const attractorStartButton = document.querySelector("#attractor-start");
const menuScreen = document.querySelector("#menu-screen");
const portraitScreen = document.querySelector("#portrait-screen");
const landscapeScreen = document.querySelector("#landscape-screen");
const sculptureScreen = document.querySelector("#sculpture-screen");
const portraitsButton = document.querySelector('[data-open-view="portraits"]');
const landscapesButton = document.querySelector('.panel-landscapes');
const sculptureButton = document.querySelector('[data-open-view="sculpture"]');
const portraitBackButton = document.querySelector("#portrait-back");
const portraitBackControl = document.querySelector(".portrait-control-back");
const portraitPrevButton = document.querySelector("#portrait-prev");
const portraitNextButton = document.querySelector("#portrait-next");
const portraitTextButton = document.querySelector(".portrait-control-text");
const landscapeBackButton = document.querySelector("#landscape-back");
const landscapeTextButton = document.querySelector(".landscape-control-text");
const landscapePrevPaintingButton = document.querySelector("#landscape-prev-painting");
const landscapeNextPaintingButton = document.querySelector("#landscape-next-painting");
const sculptureBackButton = document.querySelector("#sculpture-back");
const sculptureTextButton = document.querySelector(".sculpture-control-text");
const sculpturePrevButton = document.querySelector("#sculpture-prev");
const sculptureNextButton = document.querySelector("#sculpture-next");

const portraitTitle = document.querySelector("#portrait-title");
const portraitArtist = document.querySelector("#portrait-artist");
const portraitSummary = document.querySelector("#portrait-summary");
const portraitBody = document.querySelector("#portrait-body");
const portraitArtwork = document.querySelector("#portrait-artwork");
const portraitCount = document.querySelector("#portrait-count");
const portraitImageDots = document.querySelector("#portrait-image-dots");
const portraitImagePreview = document.querySelector("#portrait-image-preview");
const portraitCopy = document.querySelector(".portrait-copy");
const portraitTextFlow = document.querySelector(".portrait-text-flow");
const portraitVideoTrigger = document.querySelector("#portrait-video-trigger");
const landscapeArtwork = document.querySelector("#landscape-artwork");
const landscapeArtworkWrap = document.querySelector(".landscape-artwork-wrap");
const landscapeTitle = document.querySelector("#landscape-title");
const landscapeArtist = document.querySelector("#landscape-artist");
const landscapeDate = document.querySelector("#landscape-date");
const landscapeBody = document.querySelector("#landscape-body");
const landscapeDotsWrap = document.querySelector(".landscape-dots");
const landscapeDots = Array.from(document.querySelectorAll(".landscape-dot"));
const sculptureTitle = document.querySelector("#sculpture-title");
const sculptureArtist = document.querySelector("#sculpture-artist");
const sculptureBody = document.querySelector("#sculpture-body");
const sculptureArtwork = document.querySelector("#sculpture-artwork");
const videoLightbox = document.querySelector("#video-lightbox");
const videoLightboxClose = document.querySelector("#video-lightbox-close");
const videoLightboxPlayer = document.querySelector("#video-lightbox-player");
const imageLightbox = document.querySelector("#image-lightbox");
const imageLightboxClose = document.querySelector("#image-lightbox-close");
const imageLightboxPreview = document.querySelector("#image-lightbox-preview");
const IDLE_TIMEOUT_MS = 180000;

const portraits = [
  {
    sectionId: "memories",
    title: "150 Memories",
    artist: "David Martin\n (b. 1975) 2023",
    summary:
      "Go behind the scenes with artist David Martin and learn more about the creation of 150 Memories, celebrating the 150th Open at St Andrews in 2022.",
    body:
      "David Martin Interview\n[runtime 2:52]",
    artworkClass: "artwork-image artwork-1",
    artworkImages: [
      "./assets/images/paintings/13-studio-1.jpg",
      "./assets/images/paintings/13-studio-2.jpg",
      "./assets/images/paintings/13-studio-3.jpg",
    ],
    autoRotateInterval: 2500,
    showImageDots: false,
    hasVideo: true,
  },
  {
    sectionId: "museum-extension",
    title: "Museum Extension Project",
    artist: "Richard Murphy Architects\n2015",
    summary:
      "Between 2014 and 2015 a cafe - designed by Richard Murphy Architects - was built on the roof of the Museum, opening in time for The 144th Open at St Andrews in 2015.",
    body:
      "The cafe, designed with most seats facing west towards the beach and Old Course, now operates as a restaurant.",
    artworkClass: "artwork-image artwork-2",
    artworkImages: ["./assets/images/page-30.png"],
    layout: "stacked-image",
    artworkFit: "cover",
    artworkSize: "cover",
    disableTextOverflow: true,
    controlsBottom: -56,
    showImageDots: false,
  },
  {
    sectionId: "museum-extension",
    title: "Museum Extension Project",
    artist: "Richard Murphy Architects\n2015",
    summary: "",
    body: "The original Museum rooftop (above), and the cafe\nextension (below).",
    artworkClass: "artwork-image artwork-2",
    artworkImages: ["./assets/images/BRITIS~1-4_4.png"],
    layout: "stacked-image",
    artworkFit: "cover",
    artworkSize: "100% auto",
    artworkPosition: "center top",
    artworkHeight: 468,
    controlsBottom: 24,
    showImageDots: false,
  },
  {
    sectionId: "museum-extension",
    title: "Museum Extension Project",
    artist: "Richard Murphy Architects\n2015",
    summary: "",
    body: "View of the cafe and changes to the outside of the building,\nfrom Golf Place.",
    largeTextBody: "View of the cafe and changes to the outside of the\nbuilding, from Golf Place.",
    artworkClass: "artwork-image artwork-2",
    artworkImages: ["./assets/images/BRITIS~1-5_5.png"],
    layout: "stacked-image",
    artworkFit: "cover",
    artworkSize: "100% auto",
    artworkPosition: "center top",
    artworkHeight: 432,
    controlsBottom: 24,
    showImageDots: false,
  },
  {
    sectionId: "museum-extension",
    title: "Museum Extension Project",
    artist: "Richard Murphy Architects\n2015",
    summary: "",
    body: "Digital drawing of the cafe, from Golf Place.",
    artworkClass: "artwork-image artwork-2",
    artworkImages: ["./assets/images/OCTOBE~1-23_23.png"],
    layout: "stacked-image",
    artworkFit: "cover",
    artworkSize: "100% auto",
    artworkPosition: "center top",
    artworkHeight: 439,
    controlsBottom: 24,
    showImageDots: false,
  },
  {
    sectionId: "museum-extension",
    title: "Museum Extension Project",
    artist: "Richard Murphy Architects\n2015",
    summary: "",
    body: "Digital drawing of the Museum building with the\nrooftop cafe (right), from Bruce Embankment Car Park.",
    largeTextBody: "Digital drawing of the Museum building with the rooftop\ncafe (right), from Bruce Embankment Car Park.",
    artworkClass: "artwork-image artwork-2",
    artworkImages: ["./assets/images/OCTOBE~1-24.png"],
    layout: "stacked-image",
    artworkFit: "cover",
    artworkSize: "100% auto",
    artworkPosition: "center top",
    artworkHeight: 439,
    controlsBottom: 24,
    showImageDots: false,
  },
];

let currentPortraitIndex = 0;
let currentPortraitArtworkIndex = 0;
let portraitAutoRotateTimer = null;
let isLargeText = false;
let isLandscapeLargeText = false;
let isSculptureLargeText = false;
let currentLandscapePaintingIndex = 0;
let currentLandscapeStep = 0;
let currentSculptureIndex = 0;
let idleTimeoutTimer = null;

const sculptures = [
  {
    title: "The First World War Memorial",
    artist: "By Reginald Fairlie (1883-1952)\n1922",
    body:
      "Commissioned in memory of the 62 Members and four staff who died in the First World War, including two of the Club’s best golfers, Norman Hunter and Jack Graham, who both served on the Rules Committee. Designed by Edinburgh architect Reginald Fairlie, who’s father and grandfather had both captained the Club.",
    artworkClass: "sculpture-artwork-1",
  },
  {
    title: "Old Tom Morris (1821-1908)",
    artist: "By Waller Hubert Paton (1863-1940)\n1910",
    body:
      "Just below The Royal and Ancient Clubhouse clock, a portrait in bronze of Tom Morris looks out across the Old Course which he tended for nearly 40 years. Designed by Edinburgh sculptor Waller Hubert Paton and paid for through subscriptions from golf clubs and individuals, the memorial bronze was installed in 1910, two years after Morris’ death.",
    artworkClass: "sculpture-artwork-2",
  },
];

const landscapePaintings = [
  {
    steps: [
      {
        title: "View of St Andrews from the<br>Old Course, with Golfers",
        artist: "Unknown artist",
        date: "c. 1740s",
        body:
          "The earliest known painting of golf at St Andrews, “executed at a time when our ancestors took to the field in wigs and cocked hats.” Donated to the Club in 1847.",
        artworkClass: "landscape-artwork-step-0",
      },
      {
        title: "View of St Andrews from the<br>Old Course, with Golfers",
        artist: "Unknown artist",
        date: "Foreground",
        body:
          "A match between two pairs of golfers is in progress – the gentlemen in blue against the gentlemen in red and yellow. Each pair has a caddie, who gathers the clubs under his arm.",
        artworkClass: "landscape-artwork-step-1",
      },
      {
        title: "View of St Andrews from the<br>Old Course, with Golfers",
        artist: "Unknown artist",
        date: "Middle ground",
        body:
          "Golfers did not have sole use of the links, beyond them we can see shepherds, a dog and a flock of sheep. The windmill, seen on the right of the painting, was demolished in 1775.",
        artworkClass: "landscape-artwork-step-2",
      },
      {
        title: "View of St Andrews from the<br>Old Course, with Golfers",
        artist: "Unknown artist",
        date: "Background",
        body:
          "St Andrews landmarks such as the Cathedral, St Rule’s Tower, Castle and St Salvator’s Tower can be seen in the distance.",
        artworkClass: "landscape-artwork-step-3",
      },
    ],
  },
  {
    steps: [
      {
        title: "A Golf Match at St Andrews",
        artist: "By Samuel Bough (1822-1878)",
        date: "1868",
        body:
          "“Painted on the sport” by landscape artist Samuel Bough, the Old Course appears more rugged than it is today, with sheep grazing in the foreground and trailing off into the distance.",
        artworkClass: "landscape-artwork-step-4",
      },
      {
        title: "A Golf Match at St Andrews",
        artist: "By Samuel Bough (1822-1878)",
        date: "Spectators",
        body:
          "Two groups of spectators are visible, and the parasols indicate that a number of women are present.",
        artworkClass: "landscape-artwork-step-5",
      },
      {
        title: "A Golf Match at St Andrews",
        artist: "By Samuel Bough (1822-1878)",
        date: "Golfers",
        body:
          "Two gentlemen in red coats stand near the left hand group, with one looking as if he is about to play the ball.",
        artworkClass: "landscape-artwork-step-6",
      },
      {
        title: "A Golf Match at St Andrews",
        artist: "By Samuel Bough (1822-1878)",
        date: "Ginger Beer Cart",
        body:
          "On the far left of the picture, barely visible through the gorse, David ‘Da’ Anderson stands beside his ginger beer cart. A feather ball maker by trade, ‘Da’ provided refreshment to golfers on the course for many years. The 4th (Ginger Beer) hole is named after him.",
        artworkClass: "landscape-artwork-step-7",
      },
    ],
  },
  {
    steps: [
      {
        title: "Golf Course<br>with Sheep",
        artist: "By William Miller Frazer (1864-1961)",
        date: "1901",
        body:
          "After travelling extensively throughout Europe, William Miller Frazer found greatest inspiration in the tranquil landscape of eastern England and lowland Scotland.\n\nA flock of sheep are positioned prominently, while the golfers are barely visible in the distance. Sheep continued to graze some golf courses until well into the 20th century.",
        artworkClass: "landscape-artwork-step-8",
      },
    ],
  },
];

function showMenu() {
  stopPortraitAutoRotate();
  closeVideoLightbox();
  closeImageLightbox();
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.remove("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.add("is-hidden");
}

function showAttractor() {
  stopPortraitAutoRotate();
  closeVideoLightbox();
  closeImageLightbox();
  currentPortraitIndex = 0;
  currentPortraitArtworkIndex = 0;
  currentLandscapePaintingIndex = 0;
  currentLandscapeStep = 0;
  currentSculptureIndex = 0;
  isLargeText = false;
  isLandscapeLargeText = false;
  isSculptureLargeText = false;
  portraitScreen.classList.remove("is-large-text");
  landscapeScreen.classList.remove("is-large-text");
  sculptureScreen.classList.remove("is-large-text");
  portraitTextButton.setAttribute("aria-pressed", "false");
  landscapeTextButton.setAttribute("aria-pressed", "false");
  sculptureTextButton.setAttribute("aria-pressed", "false");
  portraitTextFlow.scrollTop = 0;
  attractorScreen.classList.remove("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.add("is-hidden");
}

function showPortraits() {
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.remove("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.add("is-hidden");
  renderPortrait(currentPortraitIndex);
}

function showLandscape() {
  stopPortraitAutoRotate();
  closeVideoLightbox();
  closeImageLightbox();
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.remove("is-hidden");
  sculptureScreen.classList.add("is-hidden");
  renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
}

function showSculpture() {
  stopPortraitAutoRotate();
  closeVideoLightbox();
  closeImageLightbox();
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.remove("is-hidden");
  renderSculpture(currentSculptureIndex);
}

function renderPortrait(index, options = {}) {
  const { preserveScroll = false } = options;
  const portrait = portraits[index];
  const artworkImages = portrait.artworkImages ?? [];
  const activeArtworkImage = artworkImages[currentPortraitArtworkIndex] ?? "";
  const encodedArtworkImage = activeArtworkImage ? encodeURI(activeArtworkImage) : "";
  const currentSectionEntries = portraits.filter((entry) => entry.sectionId === portrait.sectionId);
  const currentSectionIndexes = portraits
    .map((entry, entryIndex) => (entry.sectionId === portrait.sectionId ? entryIndex : -1))
    .filter((entryIndex) => entryIndex !== -1);
  const sectionStartIndex = currentSectionIndexes[0];
  const sectionEndIndex = currentSectionIndexes[currentSectionIndexes.length - 1];
  const hasMultipleSectionPages = currentSectionEntries.length > 1;
  const savedScrollTop = preserveScroll ? portraitTextFlow.scrollTop : 0;

  stopPortraitAutoRotate();
  if (portrait.layout === "stacked-image") {
    const stackedCopyGap = 10;
    const stackedCopyBottomGap = 54;
    const artworkHeight = portrait.artworkHeight ?? 360;
    const copyTop = portrait.copyTop ?? 54 + artworkHeight + stackedCopyGap;
    const copyHeight = Math.max(120, 810 - copyTop - stackedCopyBottomGap);
    portraitScreen.style.setProperty("--stacked-artwork-height", `${artworkHeight}px`);
    portraitScreen.style.setProperty("--stacked-artwork-midpoint", `${54 + artworkHeight / 2}px`);
    portraitScreen.style.setProperty("--stacked-copy-top", `${copyTop}px`);
    portraitScreen.style.setProperty("--stacked-copy-height", `${copyHeight}px`);
    portraitScreen.style.setProperty("--stacked-controls-bottom", `${portrait.controlsBottom ?? -54}px`);
    portraitScreen.style.setProperty("--stacked-controls-top", `${portrait.controlsTop ?? 0}px`);
  } else {
    portraitScreen.style.removeProperty("--stacked-artwork-height");
    portraitScreen.style.removeProperty("--stacked-artwork-midpoint");
    portraitScreen.style.removeProperty("--stacked-copy-top");
    portraitScreen.style.removeProperty("--stacked-copy-height");
    portraitScreen.style.removeProperty("--stacked-controls-bottom");
    portraitScreen.style.removeProperty("--stacked-controls-top");
  }
  portraitTitle.innerHTML = portrait.title.replaceAll("\n", "<br>");
  portraitArtist.innerHTML = portrait.artist.replaceAll("\n", "<br>");
  portraitSummary.innerHTML = portrait.summary.replaceAll("\n", "<br>");
  const portraitBodyText = isLargeText && portrait.largeTextBody ? portrait.largeTextBody : portrait.body;
  portraitBody.innerHTML = portraitBodyText.replaceAll("\n", "<br>");
  portraitArtwork.className = `portrait-artwork ${portrait.artworkClass}`;
  portraitArtwork.style.backgroundImage = encodedArtworkImage ? `url("${encodedArtworkImage}")` : "";
  portraitArtwork.style.backgroundSize = portrait.artworkSize ?? "";
  portraitArtwork.style.backgroundPosition = portrait.artworkPosition ?? "";
  portraitScreen.classList.toggle("has-stacked-image-layout", portrait.layout === "stacked-image");
  portraitScreen.classList.toggle("has-fill-artwork", portrait.artworkFit === "cover");
  portraitScreen.classList.toggle("has-overlay-controls", portrait.overlayControls === true);
  portraitScreen.classList.toggle("has-static-text-layout", portrait.disableTextOverflow === true);
  portraitArtwork.classList.toggle("is-toggleable", artworkImages.length > 1);
  renderPortraitImageDots(portrait);
  portraitVideoTrigger.classList.toggle("is-visible", portrait.hasVideo === true);
  portraitVideoTrigger.classList.toggle("is-hidden", portrait.hasVideo !== true);
  portraitCount.textContent = hasMultipleSectionPages ? `${currentSectionIndexes.indexOf(index) + 1} / ${currentSectionEntries.length}` : "";
  portraitPrevButton.hidden = !hasMultipleSectionPages;
  portraitNextButton.hidden = !hasMultipleSectionPages;
  portraitPrevButton.disabled = index === sectionStartIndex;
  portraitNextButton.disabled = index === sectionEndIndex;
  portraitPrevButton.setAttribute("aria-disabled", String(index === sectionStartIndex));
  portraitNextButton.setAttribute("aria-disabled", String(index === sectionEndIndex));
  portraitTextFlow.scrollTop = savedScrollTop;
  updatePortraitOverflow();
  startPortraitAutoRotate(portrait);
}

function goToNextPortrait() {
  const currentSectionId = portraits[currentPortraitIndex].sectionId;
  const nextIndex = currentPortraitIndex + 1;

  if (nextIndex >= portraits.length || portraits[nextIndex].sectionId !== currentSectionId) {
    return;
  }

  currentPortraitIndex = nextIndex;
  currentPortraitArtworkIndex = 0;
  renderPortrait(currentPortraitIndex);
}

function goToPreviousPortrait() {
  const currentSectionId = portraits[currentPortraitIndex].sectionId;
  const previousIndex = currentPortraitIndex - 1;

  if (previousIndex < 0 || portraits[previousIndex].sectionId !== currentSectionId) {
    return;
  }

  currentPortraitIndex = previousIndex;
  currentPortraitArtworkIndex = 0;
  renderPortrait(currentPortraitIndex);
}

function toggleLargeText() {
  isLargeText = !isLargeText;
  portraitScreen.classList.toggle("is-large-text", isLargeText);
  portraitTextButton.setAttribute("aria-pressed", String(isLargeText));
  portraitTextFlow.scrollTop = 0;
  updatePortraitOverflow();
}

function updatePortraitOverflow() {
  if (portraitScreen.classList.contains("has-static-text-layout")) {
    portraitTextFlow.classList.remove("has-overflow", "is-at-start", "is-at-end");
    portraitCopy.classList.remove("has-overflow", "is-at-end");
    return;
  }

  window.requestAnimationFrame(() => {
    const maxScrollTop = portraitTextFlow.scrollHeight - portraitTextFlow.clientHeight;
    const hasOverflow = maxScrollTop > 2;
    const isAtStart = portraitTextFlow.scrollTop <= 2;
    const isAtEnd = !hasOverflow || portraitTextFlow.scrollTop >= maxScrollTop - 2;

    portraitTextFlow.classList.toggle("has-overflow", hasOverflow);
    portraitTextFlow.classList.toggle("is-at-start", isAtStart);
    portraitTextFlow.classList.toggle("is-at-end", isAtEnd);
    portraitCopy.classList.toggle("has-overflow", hasOverflow);
    portraitCopy.classList.toggle("is-at-end", isAtEnd);
  });
}

function togglePortraitArtwork() {
  const portrait = portraits[currentPortraitIndex];
  const artworkImages = portrait.artworkImages ?? [];

  if (artworkImages.length < 2) {
    return;
  }

  currentPortraitArtworkIndex = (currentPortraitArtworkIndex + 1) % artworkImages.length;
  renderPortrait(currentPortraitIndex, { preserveScroll: true });
}

function renderPortraitImageDots(portrait) {
  const artworkImages = portrait.artworkImages ?? [];

  if (artworkImages.length < 2 || portrait.showImageDots === false) {
    portraitImageDots.innerHTML = "";
    portraitImageDots.classList.add("is-hidden");
    return;
  }

  portraitImageDots.classList.remove("is-hidden");
  portraitImageDots.innerHTML = artworkImages
    .map((_, index) => {
      const isActive = index === currentPortraitArtworkIndex;
      return `
        <button
          class="portrait-image-dot${isActive ? " is-active" : ""}"
          type="button"
          data-portrait-image-index="${index}"
          aria-label="Portrait image ${index + 1}"
          aria-pressed="${String(isActive)}"
        >
          <img src="./assets/images/Ellipse.svg" alt="" />
        </button>
      `;
    })
    .join("");
}

function selectPortraitArtwork(event) {
  const dot = event.target.closest("[data-portrait-image-index]");

  if (!dot) {
    return;
  }

  currentPortraitArtworkIndex = Number(dot.dataset.portraitImageIndex);
  renderPortrait(currentPortraitIndex, { preserveScroll: true });
}

function startPortraitAutoRotate(portrait) {
  const artworkImages = portrait.artworkImages ?? [];

  if (!portrait.autoRotateInterval || artworkImages.length < 2) {
    return;
  }

  portraitAutoRotateTimer = window.setInterval(() => {
    currentPortraitArtworkIndex = (currentPortraitArtworkIndex + 1) % artworkImages.length;
    renderPortrait(currentPortraitIndex, { preserveScroll: true });
  }, portrait.autoRotateInterval);
}

function stopPortraitAutoRotate() {
  if (portraitAutoRotateTimer === null) {
    return;
  }

  window.clearInterval(portraitAutoRotateTimer);
  portraitAutoRotateTimer = null;
}

function openVideoLightbox() {
  videoLightbox.classList.remove("is-hidden");
  videoLightbox.hidden = false;
  videoLightbox.setAttribute("aria-hidden", "false");
  videoLightboxPlayer.currentTime = 0;
  void videoLightboxPlayer.play().catch(() => {});
}

function closeVideoLightbox() {
  videoLightbox.classList.add("is-hidden");
  videoLightbox.hidden = true;
  videoLightbox.setAttribute("aria-hidden", "true");
  videoLightboxPlayer.pause();
}

function openImageLightbox() {
  const portrait = portraits[currentPortraitIndex];
  const artworkImages = portrait.artworkImages ?? [];
  const activeArtworkImage = artworkImages[currentPortraitArtworkIndex] ?? "";

  if (!activeArtworkImage) {
    return;
  }

  imageLightboxPreview.src = encodeURI(activeArtworkImage);
  imageLightboxPreview.alt = portrait.title.replaceAll("<br>", " ").replaceAll("\n", " ");
  imageLightbox.classList.remove("is-hidden");
  imageLightbox.hidden = false;
  imageLightbox.setAttribute("aria-hidden", "false");
}

function closeImageLightbox() {
  imageLightbox.classList.add("is-hidden");
  imageLightbox.hidden = true;
  imageLightbox.setAttribute("aria-hidden", "true");
  imageLightboxPreview.removeAttribute("src");
}

function startIdleTimeout() {
  if (idleTimeoutTimer !== null) {
    window.clearTimeout(idleTimeoutTimer);
  }

  idleTimeoutTimer = window.setTimeout(() => {
    showAttractor();
    startIdleTimeout();
  }, IDLE_TIMEOUT_MS);
}

function renderLandscape(paintingIndex, stepIndex) {
  const painting = landscapePaintings[paintingIndex];
  const step = painting.steps[stepIndex];
  const isBoughPainting = paintingIndex === 1;
  const isFrazerPainting = paintingIndex === 2;
  const isOverviewStep = stepIndex === 0;
  const isDetailStep = stepIndex > 0;
  landscapeTitle.innerHTML = step.title;
  landscapeArtist.textContent = step.artist;
  landscapeDate.textContent = step.date;
  landscapeBody.textContent = step.body;
  landscapeArtworkWrap.classList.toggle("is-bough-painting", isBoughPainting);
  landscapeArtworkWrap.classList.toggle("is-frazer-painting", isFrazerPainting);
  landscapeScreen.classList.toggle("is-landscape-overview", isOverviewStep);
  landscapeScreen.classList.toggle("is-landscape-detail", isDetailStep);
  landscapeArtwork.className = `landscape-artwork ${step.artworkClass}`;

  landscapeDots.forEach((dot, index) => {
    const isVisible = index < painting.steps.length;
    const isActive = isVisible && painting.steps.length > 1 && index === stepIndex;
    dot.classList.toggle("is-hidden", !isVisible);
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", String(isActive));
  });
  const hideLandscapeDots = painting.steps.length <= 1;
  landscapeDotsWrap.classList.toggle("is-hidden", hideLandscapeDots);
  landscapeDotsWrap.hidden = hideLandscapeDots;
  landscapeDotsWrap.setAttribute("aria-hidden", String(hideLandscapeDots));

  landscapePrevPaintingButton.disabled = paintingIndex === 0;
  landscapeNextPaintingButton.disabled = paintingIndex === landscapePaintings.length - 1;
  landscapePrevPaintingButton.setAttribute("aria-disabled", String(paintingIndex === 0));
  landscapeNextPaintingButton.setAttribute("aria-disabled", String(paintingIndex === landscapePaintings.length - 1));
}

function goToPreviousLandscapePainting() {
  if (currentLandscapePaintingIndex <= 0) {
    return;
  }

  currentLandscapePaintingIndex -= 1;
  currentLandscapeStep = 0;
  renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
}

function goToNextLandscapePainting() {
  if (currentLandscapePaintingIndex >= landscapePaintings.length - 1) {
    return;
  }

  currentLandscapePaintingIndex += 1;
  currentLandscapeStep = 0;
  renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
}

function renderSculpture(index) {
  const sculpture = sculptures[index];
  const formattedArtist = sculpture.artist
    .replace(/\s+\(([^)]+)\)/, "<br>($1)")
    .replaceAll("\n", "<br>");

  sculptureTitle.textContent = sculpture.title;
  sculptureArtist.innerHTML = formattedArtist;
  sculptureBody.textContent = sculpture.body;
  sculptureArtwork.className = `sculpture-artwork ${sculpture.artworkClass}`;
  sculpturePrevButton.disabled = index === 0;
  sculptureNextButton.disabled = index === sculptures.length - 1;
  sculpturePrevButton.setAttribute("aria-disabled", String(index === 0));
  sculptureNextButton.setAttribute("aria-disabled", String(index === sculptures.length - 1));
}

function goToPreviousSculpture() {
  if (currentSculptureIndex <= 0) {
    return;
  }

  currentSculptureIndex -= 1;
  renderSculpture(currentSculptureIndex);
}

function goToNextSculpture() {
  if (currentSculptureIndex >= sculptures.length - 1) {
    return;
  }

  currentSculptureIndex += 1;
  renderSculpture(currentSculptureIndex);
}

attractorStartButton.addEventListener("click", showMenu);
if (portraitsButton) {
  portraitsButton.addEventListener("click", () => {
    currentPortraitIndex = 0;
    currentPortraitArtworkIndex = 0;
    showPortraits();
  });
}

if (landscapesButton) {
  landscapesButton.addEventListener("click", () => {
    currentPortraitIndex = 1;
    currentPortraitArtworkIndex = 0;
    showPortraits();
  });
}

if (sculptureButton) {
  sculptureButton.addEventListener("click", showSculpture);
}
portraitBackButton.addEventListener("click", showMenu);
portraitBackControl.addEventListener("click", showMenu);
portraitPrevButton.addEventListener("click", goToPreviousPortrait);
portraitNextButton.addEventListener("click", goToNextPortrait);
portraitTextButton.addEventListener("click", toggleLargeText);
portraitArtwork.addEventListener("click", togglePortraitArtwork);
portraitImagePreview.addEventListener("click", openImageLightbox);
portraitImageDots.addEventListener("click", selectPortraitArtwork);
portraitTextFlow.addEventListener("scroll", updatePortraitOverflow);
portraitVideoTrigger.addEventListener("click", openVideoLightbox);
landscapeBackButton.addEventListener("click", showMenu);
landscapePrevPaintingButton.addEventListener("click", goToPreviousLandscapePainting);
landscapeNextPaintingButton.addEventListener("click", goToNextLandscapePainting);
landscapeTextButton.addEventListener("click", () => {
  isLandscapeLargeText = !isLandscapeLargeText;
  landscapeScreen.classList.toggle("is-large-text", isLandscapeLargeText);
  landscapeTextButton.setAttribute("aria-pressed", String(isLandscapeLargeText));
});
sculptureBackButton.addEventListener("click", showMenu);
sculpturePrevButton.addEventListener("click", goToPreviousSculpture);
sculptureNextButton.addEventListener("click", goToNextSculpture);
sculptureTextButton.addEventListener("click", () => {
  isSculptureLargeText = !isSculptureLargeText;
  sculptureScreen.classList.toggle("is-large-text", isSculptureLargeText);
  sculptureTextButton.setAttribute("aria-pressed", String(isSculptureLargeText));
});
videoLightboxClose.addEventListener("click", closeVideoLightbox);
videoLightbox.addEventListener("click", (event) => {
  if (event.target === videoLightbox) {
    closeVideoLightbox();
  }
});
imageLightboxClose.addEventListener("click", closeImageLightbox);
imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) {
    closeImageLightbox();
  }
});
landscapeDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentLandscapeStep = Number(dot.dataset.landscapeStep);
    renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
  });
});

window.addEventListener("resize", updatePortraitOverflow);
["pointerdown", "pointerup", "touchstart", "keydown", "wheel", "scroll"].forEach((eventName) => {
  window.addEventListener(eventName, startIdleTimeout, { passive: true, capture: true });
});

startIdleTimeout();
