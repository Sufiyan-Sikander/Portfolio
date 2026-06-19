// Skills Data - All skills to be displayed
// `slug` maps to a Simple Icons filename (for the logo shape/path)
// `color` is the official brand hex color for that logo (Simple Icons SVGs
// ship as black-only paths with no embedded color, so we supply it here)
const skillsData = [
    // Programming & Databases
    { name: 'Python', icon: '🐍', category: 'Programming', slug: 'python', color: '#3776AB' },
    { name: 'MySQL', icon: '🗄️', category: 'Programming', slug: 'mysql', color: '#4479A1' },
    { name: 'PostgreSQL', icon: '🗄️', category: 'Programming', slug: 'postgresql', color: '#4169E1' },

    // AI & Machine Learning
    { name: 'Machine Learning', icon: '🤖', category: 'AI' },
    { name: 'Deep Learning', icon: '🧠', category: 'AI' },
    { name: 'Neural Networks', icon: '⚡', category: 'AI' },
    { name: 'Transfer Learning', icon: '↔️', category: 'AI' },
    { name: 'Supervised Learning', icon: '📊', category: 'AI' },
    { name: 'Unsupervised Learning', icon: '🔍', category: 'AI' },
    { name: 'Generative AI', icon: '✨', category: 'AI' },
    { name: 'Agentic AI', icon: '🎯', category: 'AI' },

    // NLP & LLMs
    { name: 'NLP', icon: '💬', category: 'NLP' },
    { name: 'LLMs', icon: '🧠', category: 'NLP' },
    { name: 'Prompt Engineering', icon: '✍️', category: 'NLP' },
    { name: 'Text Classification', icon: '📝', category: 'NLP' },
    { name: 'NER', icon: '🏷️', category: 'NLP' },
    { name: 'GPT Models', icon: '📦', category: 'NLP' },
    { name: 'Transformers', icon: '🔗', category: 'NLP', slug: 'huggingface', color: '#FFD21E' },

    // AI Models & Platforms
    { name: 'Groq', icon: '🚀', category: 'Platforms', slug: 'groq', color: '#F55036', forceGlobe: true },
    { name: 'Gemini AI', icon: '✨', category: 'Platforms', slug: 'googlegemini', color: '#8E75B2' },
    { name: 'OpenAI APIs', icon: '🔑', category: 'Platforms', slug: 'openai', color: '#412991', forceGlobe: true },

    // Computer Vision
    { name: 'OpenCV', icon: '👁️', category: 'Vision', slug: 'opencv', color: '#5C3EE8' },
    { name: 'YOLOv8', icon: '🎯', category: 'Vision', slug: 'ultralytics', color: '#0B23A9' },
    { name: 'Face Detection', icon: '😊', category: 'Vision' },
    { name: 'Object Detection', icon: '📦', category: 'Vision' },

    // Frameworks & Libraries
    { name: 'TensorFlow', icon: '🧠', category: 'Frameworks', slug: 'tensorflow', color: '#FF6F00' },
    { name: 'PyTorch', icon: '🔥', category: 'Frameworks', slug: 'pytorch', color: '#EE4C2C' },
    { name: 'Scikit-learn', icon: '📈', category: 'Frameworks', slug: 'scikitlearn', color: '#F7931E' },
    { name: 'Keras', icon: '⚙️', category: 'Frameworks', slug: 'keras', color: '#D00000' },
    { name: 'Pandas', icon: '📊', category: 'Frameworks', slug: 'pandas', color: '#150458' },
    { name: 'NumPy', icon: '🔢', category: 'Frameworks', slug: 'numpy', color: '#013243' },
    { name: 'LangChain', icon: '🔗', category: 'Frameworks', slug: 'langchain', color: '#1C3C3C' },
    { name: 'CrewAI', icon: '👥', category: 'Frameworks' },
    { name: 'n8n', icon: '🔄', category: 'Frameworks', slug: 'n8n', color: '#EA4B71' },

    // Backend & Deployment
    { name: 'FastAPI', icon: '⚡', category: 'Backend', slug: 'fastapi', color: '#009688' },
    { name: 'Streamlit', icon: '🌊', category: 'Backend', slug: 'streamlit', color: '#FF4B4B' },
    { name: 'REST APIs', icon: '↔️', category: 'Backend', slug: 'openapiinitiative', color: '#6BA539' },
    { name: 'Docker', icon: '🐳', category: 'Backend', slug: 'docker', color: '#2496ED' },
    { name: 'Railway', icon: '🚂', category: 'Backend', slug: 'railway', color: '#C9F074' },
    { name: 'Vercel', icon: '⬆️', category: 'Backend', slug: 'vercel', color: '#FFFFFF' },

    // Cloud & Databases
    { name: 'Pinecone', icon: '🖲️', category: 'Cloud', slug: 'pinecone', color: '#0A0A0A', forceGlobe: true },
    { name: 'Firebase', icon: '🔥', category: 'Cloud', slug: 'firebase', color: '#FFCA28' },
    { name: 'Supabase', icon: '🗄️', category: 'Cloud', slug: 'supabase', color: '#3FCF8E' },
    { name: 'Slack', icon: '💬', category: 'Cloud', slug: 'slack', color: '#4A154B', forceGlobe: true },
    { name: 'Clickup', icon: '✅', category: 'Cloud', slug: 'clickup', color: '#7B68EE' },

    // Frontend & Full-Stack
    { name: 'React.js', icon: '⚛️', category: 'Frontend', slug: 'react', color: '#61DAFB' },
    { name: 'Authentication', icon: '🔐', category: 'Frontend' },
    { name: 'Email Verification', icon: '📧', category: 'Frontend' },
    { name: 'Chat Systems', icon: '💬', category: 'Frontend' },

    // AI Infrastructure
    { name: 'OpenAI Agent SDK', icon: '📦', category: 'Infrastructure', slug: 'openai', color: '#412991' },
    { name: 'MCP Servers', icon: '🖥️', category: 'Infrastructure' },
    { name: 'AI Workflow', icon: '⚙️', category: 'Infrastructure' },
    { name: 'AI Integration', icon: '🧩', category: 'Infrastructure' }
];

// Color mapping for categories (used only for connection lines + emoji fallback text)
const categoryColors = {
    'Programming': 0x64FFDA,
    'AI': 0xFF1493,
    'NLP': 0x00CED1,
    'Platforms': 0xFFD700,
    'Vision': 0x00FF00,
    'Frameworks': 0xFF6347,
    'Backend': 0x1E90FF,
    'Cloud': 0xFF69B4,
    'Frontend': 0x3CB371,
    'Infrastructure': 0x9370DB
};

// CDN base for real brand logos (Simple Icons via jsDelivr)
const LOGO_CDN_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/';

let scene, camera, renderer, globe, particles = [];
let connectionLines = null;
let mouse = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let dragRotation = { x: 0, y: 0 };
const ROTATION_SPEED = 0.0002;
let raycaster = new THREE.Raycaster();
let hoveredSkill = null;
let tooltip = null;

function initSkillsGlobe() {
    const container = document.getElementById('skills-globe-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create central globe
    const globeGeometry = new THREE.IcosahedronGeometry(1.2, 16);
    const globeMaterial = new THREE.MeshPhongMaterial({
        color: 0x64FFDA,
        wireframe: true,
        opacity: 0.1,
        transparent: true,
        emissive: 0x64FFDA,
        emissiveIntensity: 0.2
    });
    globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Create particle nodes for each skill
    createSkillNodes();

    // Lighting
    const light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);

    // Mouse event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', hideTooltip);

    // Touch event listeners (mobile support)
    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    window.addEventListener('resize', onWindowResize);

    // Prevent default touch behavior on the container (stops page scroll while rotating)
    container.style.touchAction = 'none';
    container.style.webkitUserSelect = 'none';
    container.style.userSelect = 'none';

    // Animation loop
    animate();
}

// Generate a transparent canvas texture with just the emoji icon + label
function makeFallbackTexture(skill) {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.font = `${size * 0.42}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(skill.icon, size / 2, size / 2 - 14);

    drawLabel(ctx, skill, size);

    return new THREE.CanvasTexture(canvas);
}

// Shared label drawing
function drawLabel(ctx, skill, size) {
    const label = skill.name.length > 10 ? skill.name.slice(0, 9) + '…' : skill.name;
    ctx.font = `bold ${size * 0.13}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(label, size / 2, size - 10);
}

// Build a transparent canvas texture using a real loaded brand logo
function makeLogoTexture(skill, img) {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const logoSize = size * 0.5;
    const logoX = (size - logoSize) / 2;
    const logoY = size / 2 - logoSize / 2 - 14;

    const off = document.createElement('canvas');
    off.width = size;
    off.height = size;
    const offCtx = off.getContext('2d');
    offCtx.drawImage(img, 0, 0, size, size);
    offCtx.globalCompositeOperation = 'source-in';
    offCtx.fillStyle = skill.color || '#FFFFFF';
    offCtx.fillRect(0, 0, size, size);

    ctx.drawImage(off, logoX, logoY, logoSize, logoSize);

    drawLabel(ctx, skill, size);

    return new THREE.CanvasTexture(canvas);
}

// Attempt to load a brand logo SVG from the CDN; resolves null on failure
function loadLogoImage(slug) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = `${LOGO_CDN_BASE}${slug}.svg`;
    });
}

function createSkillNodes() {
    const count = skillsData.length;
    const spriteBySkill = new Map();

    skillsData.forEach((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;

        const x = Math.cos(theta) * Math.sin(phi) * 1.8;
        const y = Math.sin(theta) * Math.sin(phi) * 1.8;
        const z = Math.cos(phi) * 1.8;

        const fallbackTexture = makeFallbackTexture(skill);
        const logoMaterial = new THREE.SpriteMaterial({ map: fallbackTexture, transparent: true });
        const logoSprite = new THREE.Sprite(logoMaterial);
        logoSprite.position.set(x, y, z);
        logoSprite.scale.set(0.32, 0.32, 1);
        logoSprite.userData = { skill, originalPosition: new THREE.Vector3(x, y, z), isLogo: true };
        scene.add(logoSprite);
        particles.push(logoSprite);
        spriteBySkill.set(skill, logoSprite);
    });

    createConnections();

    skillsData.forEach((skill) => {
        if (!skill.slug) return;
        loadLogoImage(skill.slug).then((img) => {
            if (!img) return;
            const sprite = spriteBySkill.get(skill);
            if (!sprite) return;
            const newTexture = makeLogoTexture(skill, img);
            sprite.material.map.dispose();
            sprite.material.map = newTexture;
            sprite.material.needsUpdate = true;
        });
    });
}

function createConnections() {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    const skillSprites = particles.filter(p => p instanceof THREE.Sprite && p.userData && p.userData.skill);

    for (let i = 0; i < skillSprites.length; i++) {
        for (let j = i + 1; j < skillSprites.length; j++) {
            const sprite1 = skillSprites[i];
            const sprite2 = skillSprites[j];

            positions.push(sprite1.position.x, sprite1.position.y, sprite1.position.z);
            positions.push(sprite2.position.x, sprite2.position.y, sprite2.position.z);

            const color1 = new THREE.Color(categoryColors[sprite1.userData.skill.category] || 0x64FFDA);
            const color2 = new THREE.Color(categoryColors[sprite2.userData.skill.category] || 0x64FFDA);

            colors.push(color1.r, color1.g, color1.b);
            colors.push(color2.r, color2.g, color2.b);
        }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

    const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        opacity: 0.08,
        transparent: true,
        linewidth: 1
    });

    connectionLines = new THREE.LineSegments(geometry, lineMaterial);
    scene.add(connectionLines);
}

// ─── Mouse Handlers ───────────────────────────────────────────────────────────

function onMouseMove(event) {
    const container = document.getElementById('skills-globe-container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 2 - 1;
    const y = -(event.clientY - rect.top) / rect.height * 2 + 1;

    mouse.x = x;
    mouse.y = y;

    if (isDragging) {
        const deltaX = x - dragStart.x;
        const deltaY = y - dragStart.y;

        dragRotation.y = deltaX * 3;
        dragRotation.x = -deltaY * 3;

        targetRotation.y = dragRotation.y;
        targetRotation.x = dragRotation.x;
    } else {
        raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
        const skillSprites = particles.filter(p => p instanceof THREE.Sprite && p.userData && p.userData.skill);
        const intersects = raycaster.intersectObjects(skillSprites);

        if (intersects.length > 0) {
            const hoveredSprite = intersects[0].object;
            if (hoveredSprite.userData && hoveredSprite.userData.skill) {
                hoveredSkill = hoveredSprite.userData.skill;
                showTooltip(event, hoveredSkill);
                container.style.cursor = 'pointer';
            }
        } else {
            hoveredSkill = null;
            hideTooltip();
            container.style.cursor = 'grab';
        }
    }
}

function onMouseDown(event) {
    const container = document.getElementById('skills-globe-container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    isDragging = true;
    container.classList.add('grabbing');
    dragStart.x = (event.clientX - rect.left) / rect.width * 2 - 1;
    dragStart.y = -(event.clientY - rect.top) / rect.height * 2 + 1;
}

function onMouseUp(event) {
    const container = document.getElementById('skills-globe-container');
    if (container) {
        container.classList.remove('grabbing');
    }
    isDragging = false;
}

// ─── Touch Handlers (Mobile Support) ─────────────────────────────────────────

function onTouchStart(event) {
    event.preventDefault();
    const container = document.getElementById('skills-globe-container');
    if (!container) return;

    const touch = event.touches[0];
    const rect = container.getBoundingClientRect();

    isDragging = true;
    dragStart.x = (touch.clientX - rect.left) / rect.width * 2 - 1;
    dragStart.y = -(touch.clientY - rect.top) / rect.height * 2 + 1;
}

function onTouchMove(event) {
    event.preventDefault();
    const container = document.getElementById('skills-globe-container');
    if (!container || !isDragging) return;

    const touch = event.touches[0];
    const rect = container.getBoundingClientRect();

    const x = (touch.clientX - rect.left) / rect.width * 2 - 1;
    const y = -(touch.clientY - rect.top) / rect.height * 2 + 1;

    const deltaX = x - dragStart.x;
    const deltaY = y - dragStart.y;

    dragRotation.y = deltaX * 3;
    dragRotation.x = -deltaY * 3;

    targetRotation.y = dragRotation.y;
    targetRotation.x = dragRotation.x;
}

function onTouchEnd(event) {
    isDragging = false;
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────

function showTooltip(event, skill) {
    const container = document.getElementById('skills-globe-container');
    if (!container) return;

    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        container.appendChild(tooltip);
    }

    tooltip.textContent = skill.name;
    tooltip.style.left = (event.clientX - container.getBoundingClientRect().left + 15) + 'px';
    tooltip.style.top = (event.clientY - container.getBoundingClientRect().top - 30) + 'px';
    tooltip.style.display = 'block';
}

function hideTooltip() {
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// ─── Resize ───────────────────────────────────────────────────────────────────

function onWindowResize() {
    const container = document.getElementById('skills-globe-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// ─── Animation Loop ───────────────────────────────────────────────────────────

function animate() {
    requestAnimationFrame(animate);

    currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
    currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

    globe.rotation.x = currentRotation.x;
    globe.rotation.y = currentRotation.y;

    particles.forEach((particle) => {
        if (particle.userData && particle.userData.originalPosition) {
            const pos = particle.userData.originalPosition.clone();

            const cosX = Math.cos(currentRotation.x);
            const sinX = Math.sin(currentRotation.x);
            let y = pos.y * cosX - pos.z * sinX;
            let z = pos.y * sinX + pos.z * cosX;

            const cosY = Math.cos(currentRotation.y);
            const sinY = Math.sin(currentRotation.y);
            let x = pos.x * cosY + z * sinY;
            z = -pos.x * sinY + z * cosY;

            particle.position.set(x, y, z);
        }
    });

    if (!isDragging) {
        targetRotation.y += ROTATION_SPEED;
    }

    if (connectionLines) {
        const skillSprites = particles.filter(p => p instanceof THREE.Sprite && p.userData && p.userData.skill);
        const positions = [];
        const colors = [];

        for (let i = 0; i < skillSprites.length; i++) {
            for (let j = i + 1; j < skillSprites.length; j++) {
                const sprite1 = skillSprites[i];
                const sprite2 = skillSprites[j];

                positions.push(sprite1.position.x, sprite1.position.y, sprite1.position.z);
                positions.push(sprite2.position.x, sprite2.position.y, sprite2.position.z);

                const color1 = new THREE.Color(categoryColors[sprite1.userData.skill.category] || 0x64FFDA);
                const color2 = new THREE.Color(categoryColors[sprite2.userData.skill.category] || 0x64FFDA);

                colors.push(color1.r, color1.g, color1.b);
                colors.push(color2.r, color2.g, color2.b);
            }
        }

        connectionLines.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        connectionLines.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
        connectionLines.geometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initSkillsGlobe, 500);
});
