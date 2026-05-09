const text = {
  zh: {
    dockWorks: "作品集",
    dockAbout: "个人经历",
    dockHonors: "竞赛荣誉",
    identityRole: "AIGC VIDEO / DIGITAL IMAGING / EDITING",
    identityName: "朱世举",
    identitySub: "数字媒体艺术 · 影像档案桌面",
    filterAll: "全部",
    filterVideo: "影像",
    filterImage: "图像",
  },
  en: {
    dockWorks: "Works",
    dockAbout: "Profile",
    dockHonors: "Honors",
    identityRole: "AIGC VIDEO / DIGITAL IMAGING / EDITING",
    identityName: "SHIJU ZHU",
    identitySub: "Digital Media Art · Visual Archive Desktop",
    filterAll: "All",
    filterVideo: "Video",
    filterImage: "Image",
  },
  ja: {
    dockWorks: "作品集",
    dockAbout: "経歴",
    dockHonors: "受賞",
    identityRole: "AIGC 映像 / デジタル写真 / 編集",
    identityName: "朱世举",
    identitySub: "デジタルメディアアート · 映像アーカイブ",
    filterAll: "全部",
    filterVideo: "映像",
    filterImage: "画像",
  },
  ko: {
    dockWorks: "작품집",
    dockAbout: "경력",
    dockHonors: "수상",
    identityRole: "AIGC 영상 / 디지털 사진 / 편집",
    identityName: "주스쥐",
    identitySub: "디지털 미디어 아트 · 영상 아카이브",
    filterAll: "전체",
    filterVideo: "영상",
    filterImage: "이미지",
  },
};

const projects = {
  yinde: {
    title: "《因德而生：一字成城》",
    kicker: "AIGC 影像 / 城市文化",
    cover: "site-assets/cover-yinde.webp",
    detailCover: "site-assets/poster-yinde.webp",
    layout: "video",
    video: "《因德而生：一字成城》/《因德而生：一字成城》.mp4",
    body:
      "本作品以“德”字为核心，通过AIGC技术完成视觉生成与叙事构建，将德州传统文化转译为可视化影像。利用AI生图与图生视频技术，重构“德之行、德之理、德之心”的文化逻辑，在虚实融合中呈现历史与当下的对话。作品探索人工智能在文化表达中的创作潜力，使传统精神在数字语境中获得新的生成方式与传播路径。",
    gallery: [
      "site-assets/yinde-still-01.webp",
      "site-assets/yinde-still-02.webp",
      "site-assets/yinde-still-03.webp",
    ],
  },
  she: {
    title: "《畲 · 行歌》",
    kicker: "AIGC 影像 / 民族文化",
    cover: "site-assets/cover-she.webp",
    detailCover: "site-assets/poster-she.webp",
    layout: "video",
    video: "畲 · 行歌/《畲 · 行歌》.mp4",
    body:
      "本作品以畲族畲歌与十里红妆为叙事母题，借助AIGC生成机制，将口传传统与仪式性经验转译为可视化影像语言。在虚实交织的生成逻辑中，重构非遗的时间结构与空间感知，使文化由地方性叙事转向可被跨文化阅读的符号系统。以“行走中的畲歌”为叙事轴线，呈现传统在迁徙与技术介入中的再生过程，指向人机共构语境下文化表达的开放性与延展性。",
    gallery: [
      "site-assets/she-still-01.webp",
      "site-assets/she-still-02.webp",
      "site-assets/she-still-03.webp",
    ],
  },
  water: {
    title: "《水脉德州：两河交汇的千年运河文化》",
    kicker: "文化影像 / 剪辑叙事",
    cover: "site-assets/cover-water.webp",
    detailCover: "site-assets/poster-water.webp",
    layout: "video",
    video: "水脉德州两河交汇的千年运河文化/水脉德州两河交汇的千年运河文化.mp4",
    body:
      "本作品以黄河与大运河在德州的交汇为核心意象，借助生成式影像技术重构运河文明叙事。通过数字非遗的方式，将德州文化转化为可感、可传播的视觉语言，并融合新中式水墨风档，构建跨文化的沉浸式品牌体验。作品在科技语境中激活地方文化记忆，促成传统与当代、地域与全球的对话，展现多元文化共生下的创新设计表达方式。",
    gallery: [
      "site-assets/water-still-01.webp",
      "site-assets/water-still-02.webp",
      "site-assets/water-still-03.webp",
    ],
  },
  fanli: {
    title: "《繁礼归真》",
    kicker: "AIGC 海报 / 社会议题",
    cover: "site-assets/fanli-01.webp",
    detailCover: "site-assets/fanli-01.webp",
    layout: "poster",
    body:
      "《繁礼归真》以“抵制高额彩礼，倡导文明婚俗”为主题，选取花轿、食盒、嫁妆箱三类传统婚俗器物作为视觉载体。作品将彩礼、宴席、房车证件等现实物件置入原本承载祝福的礼器中，形成传统寓意与现实压力之间的错位。画面保留明亮留白与红毡质感，强调婚姻应回归爱情、责任、平等与真诚，让彩礼回到礼节本义。",
    gallery: ["site-assets/fanli-01.webp", "site-assets/fanli-02.webp", "site-assets/fanli-03.webp"],
  },
  choice: {
    title: "《今日所选 明日所见》",
    kicker: "概念图像 / 可持续议题",
    cover: "site-assets/choice-display.webp",
    detailCover: "site-assets/choice-display.webp",
    layout: "poster",
    body:
      "作品以鸡蛋壳为核心意象，借其生命孕育、自然生长与未来生成的象征意味，将其视作“尚未到来的明天”的视觉容器。破碎蛋壳中出现二维码、条形码、购物小票等消费符号，使本应承载自然生命的空间转化为被记录、被标价、被结算的消费现场，形成鲜明的观念反差。作品不仅关注日常消费痕迹对生活方式的介入，也通过这种符号置换，隐喻性地指向消费行为与环境保护之间的深层关联。系列通过统一的黑色空间、静物式陈列与凝固瞬间的摄影语言，营造出冷静、克制而压迫的观看体验，引导观众联想到消费背后被忽视的资源代价与未来后果，并重新审视个人选择与环境之间的潜在关联。",
    gallery: ["site-assets/choice-01.webp", "site-assets/choice-02.webp", "site-assets/choice-03.webp"],
  },
};

let activeProject = null;

const panels = [...document.querySelectorAll("[data-panel]")];
const dockItems = [...document.querySelectorAll("[data-view]")];
const windowTitle = document.querySelector("[data-window-title]");
const langSelect = document.querySelector("#languageSelect");

function switchPanel(name) {
  panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === name));
  dockItems.forEach((item) => {
    const active = item.dataset.view === name;
    item.classList.toggle("is-active", active);
    if (item.dataset.view === "works") item.setAttribute("aria-expanded", String(active));
  });
  const titles = {
    works: "作品集",
    about: "个人经历",
    honors: "竞赛荣誉",
  };
  windowTitle.textContent = titles[name] || titles.works;
}

dockItems.forEach((button) => {
  button.addEventListener("click", () => switchPanel(button.dataset.view));
});

document.querySelectorAll("[data-view-shortcut]").forEach((button) => {
  button.addEventListener("click", () => switchPanel(button.dataset.viewShortcut));
});

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.openProject));
});

const viewer = document.querySelector("[data-project-viewer]");
const projectWindow = document.querySelector(".project-window");
const viewerTitlebar = document.querySelector("[data-project-titlebar]");
const viewerCover = document.querySelector("[data-viewer-cover]");
const viewerKicker = document.querySelector("[data-viewer-kicker]");
const viewerTitle = document.querySelector("[data-viewer-title]");
const viewerBody = document.querySelector("[data-viewer-body]");
const viewerGallery = document.querySelector("[data-viewer-gallery]");
const playVideo = document.querySelector("[data-play-video]");

function openProject(id) {
  const project = projects[id];
  if (!project) return;
  activeProject = project;
  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden", "false");
  projectWindow.dataset.layout = project.layout || "video";
  viewerTitlebar.textContent = project.title;
  viewerCover.src = project.detailCover || project.cover;
  viewerCover.alt = project.title;
  viewerKicker.textContent = project.kicker;
  viewerTitle.textContent = project.title;
  viewerBody.textContent = project.body;
  viewerGallery.innerHTML = project.gallery
    .map((src) => `<button data-preview-image="${src}"><img src="${src}" alt="${project.title}作品图"></button>`)
    .join("");
  playVideo.hidden = !project.video;
}

document.querySelector("[data-close-project]")?.addEventListener("click", closeProject);
document.querySelector("[data-back-folder]")?.addEventListener("click", closeProject);
viewer?.addEventListener("click", (event) => {
  if (event.target === viewer) closeProject();
});

function closeProject() {
  viewer.classList.remove("is-open");
  viewer.setAttribute("aria-hidden", "true");
}

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxVideo = document.querySelector("[data-lightbox-video]");
const lightboxAudio = document.querySelector("[data-lightbox-audio]");

playVideo?.addEventListener("click", () => {
  if (!activeProject?.video) return;
  openMedia("video", activeProject.video);
});

document.addEventListener("click", (event) => {
  const imageButton = event.target.closest("[data-preview-image]");
  const certButton = event.target.closest("[data-cert]");
  if (imageButton) openMedia("image", imageButton.dataset.previewImage);
  if (certButton) openMedia("image", certButton.dataset.cert);
});

function openMedia(mode, src) {
  lightbox.dataset.mode = mode;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxImage.removeAttribute("src");
  lightboxVideo.removeAttribute("src");
  lightboxAudio.removeAttribute("src");
  if (mode === "image") lightboxImage.src = src;
  if (mode === "video") {
    lightboxVideo.src = encodeURI(src);
    lightboxVideo.play().catch(() => {});
  }
  if (mode === "audio") {
    lightboxAudio.src = src;
    lightboxAudio.play().catch(() => {});
  }
}

document.querySelector("[data-close-lightbox]")?.addEventListener("click", closeMedia);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeMedia();
});

function closeMedia() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxVideo.pause();
  lightboxAudio.pause();
  lightboxVideo.removeAttribute("src");
  lightboxAudio.removeAttribute("src");
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    document.querySelector("[data-project-grid]")?.setAttribute("data-active-filter", filter);
    document.querySelectorAll(".project-card[data-kind]").forEach((card) => {
      card.hidden = filter !== "all" && !card.dataset.kind.includes(filter);
    });
  });
});

langSelect?.addEventListener("change", () => {
  const dict = text[langSelect.value] || text.zh;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dict[node.dataset.i18n];
    if (value) node.textContent = value;
  });
});

document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

document.querySelector("[data-mail]")?.addEventListener("click", () => {
  window.location.href = "mailto:zhushiju6@gmail.com";
});

function updateClock() {
  const now = new Date();
  document.querySelector("[data-clock]").textContent =
    `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

updateClock();
setInterval(updateClock, 30000);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMedia();
    closeProject();
  }
});
