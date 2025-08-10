// Application data
const appData = {
  platforms: [
    {
      "Platform": "VisuAlgo",
      "Type": "Web-based",
      "Key_Features": "24 algorithms, e-Lecture mode, quizzes, custom input",
      "Algorithms_Count": 24,
      "Best_For": "University students, comprehensive learning",
      "Cost": "Free"
    },
    {
      "Platform": "Algorithm Visualizer",
      "Type": "Web-based",
      "Key_Features": "Interactive animations with code, create own visualizations",
      "Algorithms_Count": 15,
      "Best_For": "Self-learners, algorithm creators",
      "Cost": "Free"
    },
    {
      "Platform": "CS USF Visualizations",
      "Type": "Web-based",
      "Key_Features": "Comprehensive coverage, university-grade visualizations",
      "Algorithms_Count": 50,
      "Best_For": "Academic learning, detailed study",
      "Cost": "Free"
    },
    {
      "Platform": "Programiz PRO",
      "Type": "Paid Course",
      "Key_Features": "Code visualizer, step-by-step execution, AI help",
      "Algorithms_Count": 20,
      "Best_For": "Professional development, interview prep",
      "Cost": "$49/month"
    },
    {
      "Platform": "DSA Visualizer",
      "Type": "Web-based",
      "Key_Features": "Modern interface, quiz system, progress tracking",
      "Algorithms_Count": 15,
      "Best_For": "Beginners to intermediate learners",
      "Cost": "Free"
    },
    {
      "Platform": "Python Tutor",
      "Type": "Web-based",
      "Key_Features": "Code execution visualization, multi-language support",
      "Algorithms_Count": 25,
      "Best_For": "Code debugging, understanding execution",
      "Cost": "Free"
    },
    {
      "Platform": "AlgoVis.io",
      "Type": "Web-based",
      "Key_Features": "High-quality animations, custom data input, mobile-friendly",
      "Algorithms_Count": 12,
      "Best_For": "Visual learners, clean interface preference",
      "Cost": "Free"
    },
    {
      "Platform": "Data Structure Visualizer",
      "Type": "Web-based",
      "Key_Features": "React-based, smooth animations, real-world applications",
      "Algorithms_Count": 10,
      "Best_For": "Modern web experience, project-based learning",
      "Cost": "Free"
    }
  ],
  roadmap: [
    {
      "Phase": "Foundation",
      "Topic": "Programming Fundamentals",
      "Visual_Learning_Focus": "Code execution flow",
      "Recommended_Platform": "Python Tutor",
      "Estimated_Time_Weeks": 2
    },
    {
      "Phase": "Foundation",
      "Topic": "Big O Notation",
      "Visual_Learning_Focus": "Growth rate visualization",
      "Recommended_Platform": "VisuAlgo",
      "Estimated_Time_Weeks": 1
    },
    {
      "Phase": "Basic Data Structures",
      "Topic": "Arrays and Strings",
      "Visual_Learning_Focus": "Memory layout, indexing",
      "Recommended_Platform": "Algorithm Visualizer",
      "Estimated_Time_Weeks": 2
    },
    {
      "Phase": "Basic Data Structures",
      "Topic": "Linked Lists",
      "Visual_Learning_Focus": "Pointer manipulation",
      "Recommended_Platform": "VisuAlgo",
      "Estimated_Time_Weeks": 2
    },
    {
      "Phase": "Basic Algorithms",
      "Topic": "Linear Search",
      "Visual_Learning_Focus": "Sequential scanning",
      "Recommended_Platform": "Algorithm Visualizer",
      "Estimated_Time_Weeks": 1
    },
    {
      "Phase": "Basic Algorithms",
      "Topic": "Binary Search",
      "Visual_Learning_Focus": "Divide and conquer",
      "Recommended_Platform": "VisuAlgo",
      "Estimated_Time_Weeks": 1
    },
    {
      "Phase": "Advanced Data Structures",
      "Topic": "Binary Trees",
      "Visual_Learning_Focus": "Tree structure, traversals",
      "Recommended_Platform": "VisuAlgo",
      "Estimated_Time_Weeks": 3
    },
    {
      "Phase": "Advanced Algorithms",
      "Topic": "Graph Traversal (DFS/BFS)",
      "Visual_Learning_Focus": "Path exploration",
      "Recommended_Platform": "VisuAlgo",
      "Estimated_Time_Weeks": 3
    },
    {
      "Phase": "Problem Solving",
      "Topic": "Two Pointers",
      "Visual_Learning_Focus": "Pointer movement",
      "Recommended_Platform": "DSA Visualizer",
      "Estimated_Time_Weeks": 2
    }
  ],
  algorithms: [
    {
      "name": "Bubble Sort",
      "description": "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
      "steps": ["Compare adjacent elements", "Swap if left > right", "Continue through array", "Repeat until no swaps needed"]
    },
    {
      "name": "Binary Search",
      "description": "An efficient algorithm for finding a target value in a sorted array by repeatedly dividing the search interval in half.",
      "steps": ["Find middle element", "Compare with target", "Eliminate half of remaining elements", "Repeat until found or exhausted"]
    },
    {
      "name": "Depth-First Search",
      "description": "A graph traversal algorithm that explores as far as possible along each branch before backtracking.",
      "steps": ["Start at root node", "Explore first unvisited neighbor", "Continue deep until dead end", "Backtrack and repeat"]
    },
    {
      "name": "Breadth-First Search",
      "description": "A graph traversal algorithm that explores all neighbors at the current depth before moving to nodes at the next depth.",
      "steps": ["Start at root node", "Visit all immediate neighbors", "Move to next level", "Repeat level by level"]
    },
    {
      "name": "Quick Sort",
      "description": "An efficient divide-and-conquer sorting algorithm that partitions the array around a pivot element.",
      "steps": ["Choose pivot element", "Partition array around pivot", "Recursively sort sub-arrays", "Combine results"]
    }
  ]
};

// Demo state
let demoState = {
  currentAlgorithm: null,
  isPlaying: false,
  isPaused: false,
  currentStep: 0,
  totalSteps: 0,
  animationInterval: null
};

// DOM elements
let algorithmSelect, playBtn, pauseBtn, resetBtn, algorithmText, visualizationContainer, progressFill, stepInfo;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeDOM();
  renderPlatforms();
  initializeRoadmap();
  initializeDemo();
  setupNavigation();
});

function initializeDOM() {
  algorithmSelect = document.getElementById('algorithm-select');
  playBtn = document.getElementById('play-btn');
  pauseBtn = document.getElementById('pause-btn');
  resetBtn = document.getElementById('reset-btn');
  algorithmText = document.getElementById('algorithm-text');
  visualizationContainer = document.getElementById('visualization-container');
  progressFill = document.getElementById('demo-progress');
  stepInfo = document.getElementById('current-step');
}

// Platform rendering
function renderPlatforms() {
  const platformsGrid = document.querySelector('.platforms-grid');
  
  appData.platforms.forEach(platform => {
    const platformCard = createPlatformCard(platform);
    platformsGrid.appendChild(platformCard);
  });
}

function createPlatformCard(platform) {
  const card = document.createElement('div');
  card.className = 'platform-card';
  
  const isPaid = platform.Cost !== 'Free';
  const features = platform.Key_Features;
  const truncatedFeatures = features.length > 80 ? features.substring(0, 80) + '...' : features;
  
  card.innerHTML = `
    <div class="platform-header">
      <h3>${platform.Platform}</h3>
      <span class="platform-type platform-type--${isPaid ? 'paid' : 'free'}">
        ${platform.Type}
      </span>
    </div>
    
    <div class="platform-features" data-full-features="${features}">
      <span class="features-text">${truncatedFeatures}</span>
      ${features.length > 80 ? '<span class="feature-toggle" onclick="toggleFeatures(this)">show more</span>' : ''}
    </div>
    
    <div class="platform-details">
      <div class="platform-stat">
        <span class="platform-stat-value">${platform.Algorithms_Count}</span>
        <span class="platform-stat-label">Algorithms</span>
      </div>
      <div class="platform-stat">
        <span class="platform-stat-value">${platform.Cost}</span>
        <span class="platform-stat-label">Cost</span>
      </div>
    </div>
    
    <div class="platform-best-for">
      <strong>Best for:</strong> <span>${platform.Best_For}</span>
    </div>
    
    <button class="btn btn--primary btn--full-width" onclick="visitPlatform('${platform.Platform}')">
      Visit Platform
    </button>
  `;
  
  return card;
}

function toggleFeatures(element) {
  const featuresDiv = element.parentElement;
  const featuresText = featuresDiv.querySelector('.features-text');
  const fullFeatures = featuresDiv.getAttribute('data-full-features');
  const isExpanded = featuresDiv.classList.contains('expanded');
  
  if (isExpanded) {
    featuresText.textContent = fullFeatures.substring(0, 80) + '...';
    element.textContent = 'show more';
    featuresDiv.classList.remove('expanded');
  } else {
    featuresText.textContent = fullFeatures;
    element.textContent = 'show less';
    featuresDiv.classList.add('expanded');
  }
}

function visitPlatform(platformName) {
  // Demo functionality - would normally open platform
  alert(`Opening ${platformName}... (This is a demo - actual links would redirect to the platform)`);
}

// Roadmap functionality
function initializeRoadmap() {
  const phases = document.querySelectorAll('.timeline-phase');
  
  phases.forEach(phase => {
    const phaseData = phase.getAttribute('data-phase');
    const phaseContent = phase.querySelector('.phase-content');
    const phaseTopics = phase.querySelector('.phase-topics');
    const toggle = phase.querySelector('.phase-toggle');
    
    // Group roadmap data by phase
    const phaseTopicsData = getPhaseTopics(phaseData);
    renderPhaseTopics(phaseTopics, phaseTopicsData);
    
    // Add click handler
    phase.querySelector('.phase-header').addEventListener('click', () => {
      togglePhase(phase, toggle);
    });
  });
}

function getPhaseTopics(phaseKey) {
  const phaseMap = {
    'foundation': 'Foundation',
    'basic-ds': 'Basic Data Structures',
    'basic-algo': 'Basic Algorithms',
    'advanced-ds': 'Advanced Data Structures',
    'advanced-algo': 'Advanced Algorithms',
    'problem-solving': 'Problem Solving'
  };
  
  const phaseName = phaseMap[phaseKey];
  return appData.roadmap.filter(item => item.Phase === phaseName);
}

function renderPhaseTopics(container, topics) {
  topics.forEach(topic => {
    const topicItem = document.createElement('div');
    topicItem.className = 'topic-item';
    
    topicItem.innerHTML = `
      <div class="topic-info">
        <div class="topic-name">${topic.Topic}</div>
        <div class="topic-focus">Focus: ${topic.Visual_Learning_Focus}</div>
      </div>
      <div class="topic-platform">${topic.Recommended_Platform}</div>
      <div class="topic-time">${topic.Estimated_Time_Weeks}w</div>
    `;
    
    container.appendChild(topicItem);
  });
}

function togglePhase(phase, toggle) {
  const content = phase.querySelector('.phase-content');
  const isHidden = content.classList.contains('hidden');
  
  if (isHidden) {
    content.classList.remove('hidden');
    toggle.textContent = '−';
  } else {
    content.classList.add('hidden');
    toggle.textContent = '+';
  }
}

// Demo functionality
function initializeDemo() {
  // Populate algorithm dropdown
  appData.algorithms.forEach(algorithm => {
    const option = document.createElement('option');
    option.value = algorithm.name;
    option.textContent = algorithm.name;
    algorithmSelect.appendChild(option);
  });
  
  // Event listeners
  algorithmSelect.addEventListener('change', handleAlgorithmChange);
  playBtn.addEventListener('click', playDemo);
  pauseBtn.addEventListener('click', pauseDemo);
  resetBtn.addEventListener('click', resetDemo);
}

function handleAlgorithmChange() {
  const algorithmName = algorithmSelect.value;
  
  if (!algorithmName) {
    resetDemo();
    return;
  }
  
  const algorithm = appData.algorithms.find(a => a.name === algorithmName);
  demoState.currentAlgorithm = algorithm;
  demoState.totalSteps = algorithm.steps.length;
  demoState.currentStep = 0;
  
  // Update UI
  algorithmText.innerHTML = `
    <h5>${algorithm.name}</h5>
    <p>${algorithm.description}</p>
  `;
  
  renderVisualization();
  updateControls();
  updateProgress();
}

function renderVisualization() {
  if (!demoState.currentAlgorithm) return;
  
  const algorithm = demoState.currentAlgorithm;
  
  visualizationContainer.innerHTML = `
    <div class="visualization-steps">
      <h5>Algorithm Steps</h5>
      ${algorithm.steps.map((step, index) => `
        <div class="step-item ${index < demoState.currentStep ? 'completed' : ''} ${index === demoState.currentStep ? 'active' : ''}">
          <div class="step-number">${index + 1}</div>
          <div class="step-text">${step}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function playDemo() {
  if (!demoState.currentAlgorithm) return;
  
  if (demoState.currentStep >= demoState.totalSteps) {
    resetDemo();
    return;
  }
  
  demoState.isPlaying = true;
  demoState.isPaused = false;
  
  demoState.animationInterval = setInterval(() => {
    if (demoState.currentStep < demoState.totalSteps) {
      demoState.currentStep++;
      renderVisualization();
      updateProgress();
      
      if (demoState.currentStep >= demoState.totalSteps) {
        pauseDemo();
      }
    }
  }, 1500); // 1.5 seconds per step
  
  updateControls();
}

function pauseDemo() {
  demoState.isPlaying = false;
  demoState.isPaused = true;
  
  if (demoState.animationInterval) {
    clearInterval(demoState.animationInterval);
    demoState.animationInterval = null;
  }
  
  updateControls();
}

function resetDemo() {
  pauseDemo();
  demoState.currentStep = 0;
  demoState.isPaused = false;
  
  if (demoState.currentAlgorithm) {
    renderVisualization();
  } else {
    visualizationContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎬</div>
        <p>Choose an algorithm to start the visual demonstration</p>
      </div>
    `;
  }
  
  updateProgress();
  updateControls();
}

function updateControls() {
  const hasAlgorithm = !!demoState.currentAlgorithm;
  const isComplete = demoState.currentStep >= demoState.totalSteps;
  
  playBtn.disabled = !hasAlgorithm || (demoState.isPlaying && !isComplete);
  pauseBtn.disabled = !demoState.isPlaying;
  resetBtn.disabled = !hasAlgorithm;
  
  if (isComplete && demoState.isPlaying) {
    playBtn.textContent = '🔄 Replay';
  } else {
    playBtn.textContent = '▶ Play';
  }
}

function updateProgress() {
  if (!demoState.currentAlgorithm) {
    progressFill.style.width = '0%';
    stepInfo.textContent = 'Step 0 of 0';
    return;
  }
  
  const progress = (demoState.currentStep / demoState.totalSteps) * 100;
  progressFill.style.width = `${progress}%`;
  stepInfo.textContent = `Step ${demoState.currentStep} of ${demoState.totalSteps}`;
}

// Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll('.navbar-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = section.offsetTop - navbarHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Scroll effects
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 253, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'var(--color-surface)';
    navbar.style.backdropFilter = 'none';
  }
});

// Animation observers
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe cards and sections
  const elementsToObserve = document.querySelectorAll('.platform-card, .benefit-card, .timeline-phase, .tip-card');
  elementsToObserve.forEach(el => observer.observe(el));
};

// Initialize animations after content loads
setTimeout(observeElements, 100);