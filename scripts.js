// TMDb API Key
const apiKey = 'e36fff9f334beb3443cb984d6bb12249';

// Announcement data (replace or extend with actual data as needed)
const announcements = [
    { date: '2024.10.03 - 10.06 ', title: 'Busan International Film Festival, BIFF 2024' },
];

// Movie data 
const data = [
    { "Date": "2024-04-10", "Title": "La chimera" },
    { "Date": "2024-04-12", "Title": "악은 존재하지 않는다" },
    { "Date": "2024-04-24", "Title": "여행자의 필요" },
    { "Date": "2024-04-28", "Title": "크레센도" },
    { "Date": "2024-05-01", "Title": "차이콥스키의 아내" },
    { "Date": "2024-05-05", "Title": "천국보다 낯선" },
    { "Date": "2024-05-06", "Title": "챌린저스" },
    { "Date": "2024-05-09", "Title": "펄프 픽션" },
    { "Date": "2024-05-14", "Title": "쇼생크 탈출" },
    { "Date": "2024-05-16", "Title": "소공녀" },
    { "Date": "2024-05-20", "Title": "박하사탕" },
    { "Date": "2024-06-03", "Title": "찬란한 내일로" },
    { "Date": "2024-06-06", "Title": "미녀 갱 카르멘" },
    { "Date": "2024-06-17", "Title": "로봇 드림" },
    { "Date": "2024-06-24", "Title": "프렌치 수프" },
    { "Date": "2024-07-07", "Title": "부천영화제" },
    { "Date": "2024-07-06", "Title": "부천영화제" },
    { "Date": "2024-07-14", "Title": "부천영화제" },
    { "Date": "2024-06-20", "Title": "펀치 드렁크 러브" },
    { "Date": "2024-06-27", "Title": "The Master" },
    { "Date": "2024-06-22", "Title": "여름이야기" },
    { "Date": "2024-07-01", "Title": "태풍 클럽" },
    { "Date": "2024-07-08", "Title": "퍼펙트 데이즈" },
    { "Date": "2024-07-18", "Title": "타인의 취향" },
    { "Date": "2024-08-08", "Title": "택시 드라이버" },
    { "Date": "2024-08-10", "Title": "이오 카피타노" }
];

// Member messages data (example for members)
const memberMessages = {
    "Rang7": ["실질적인 조언을 제공하며 대화에 활력을 준다. 적극적인 참여와 유머가 돋보인다."],
    "Min0": ["대화에 활발하게 참여하며 의견을 잘 조율한다. 정보를 자주 공유한다."],
    "Jeong9": ["신중하게 참여하며 의견 교환에 공감 능력이 뛰어나다. 대화에 신중하게 참여한다."],
    "Young3": ["경험을 바탕으로 유용한 정보를 제공하며 적극적으로 참여한다. 대화에 깊이를 더한다."],
    "Rom5": ["일정 신청과 관련된 부분에서 주도적인 역할을 하며 체계적으로 참여한다. 신속하고 정확한 정보 제공이 특징이다."],
    "Yeon5": ["대화의 흐름을 잘 이끌며 활발하고 적극적인 참여가 두드러진다. 다양한 의견을 공유한다."],
    "Yong4": ["대화에 깊이 있는 분석을 제공하며 진지하고 성실한 의견 제시가 특징이다."],
    "Min4": ["대화에 깊이와 실용성을 더하며 논리적이고 신중한 접근이 돋보인다."],
    "Seo5": ["대화에 활력을 불어넣으며 긍정적이고 활발한 소통이 특징이다."],
    "Young2": ["대화의 방향을 잘 이끌며 신중하고 성실한 소통이 두드러진다."],
    "Jeong4": ["적극적으로 대화에 참여하며 명확하고 신뢰감 있는 의견을 제시한다."],
    "Hae3": ["폭넓은 시각을 제공하며 진솔하고 적극적인 참여가 특징이다."],
    "Chang7": ["신중하게 참여하며 객관적이고 분석적인 시각이 돋보인다."],
    "Jik0": ["적극적으로 참여하며 실용적이고 신뢰성 있는 정보 제공이 특징이다."],
    "In5": ["구체적인 기여를 하며 조용하면서도 신중한 소통이 돋보인다."],
    "Eum1": ["대화에 활력을 주는 역할을 하며 긍정적이고 에너지 넘치는 참여가 특징이다."],
    "Yeon5": ["실용적이고 유용한 의견을 제공하며 적극적이고 성실한 소통이 돋보인다."],
    "Ho6": ["깊이와 실용성을 더하며 성실하고 적극적인 참여가 돋보인다."],
    "Jin7": ["조용하지만 중요한 기여를 하며 필요한 정보를 제공한다."],
    "Yeon8": ["긍정적인 에너지를 더하며 활발하고 진솔한 참여가 돋보인다."]
// Add more member messages as needed
};
document.addEventListener('DOMContentLoaded', function () {
    displayAnnouncements();
    displaySchedule();
    displayMembers();
});

// 웹용: 마우스 호버 이벤트
document.querySelectorAll('.poster-container').forEach(container => {
    container.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.overlay');
        overlay.style.display = 'flex';
    });
    container.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.overlay');
        overlay.style.display = 'none';
    });
});

// 모바일용: 터치 이벤트
document.querySelectorAll('.poster-container').forEach(container => {
    container.addEventListener('touchstart', function() {
        const overlay = this.querySelector('.overlay');
        overlay.style.display = 'flex';
    });
    container.addEventListener('touchend', function() {
        const overlay = this.querySelector('.overlay');
        overlay.style.display = 'none';
    });
});

async function getPosterImage(title) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const posterPath = data.results[0].poster_path;
            return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'images/default_poster.jpg';
        } else {
            return 'images/default_poster.jpg'; // 결과가 없을 경우 기본 이미지
        }
    } catch (error) {
        console.error('Error fetching poster image:', error);
        return 'images/default_poster.jpg'; // 에러 발생 시 기본 이미지
    }
}

async function displayAnnouncements() {
    const announcementList = document.getElementById('announcement-list');
    announcements.forEach(announcement => {
        const listItem = document.createElement('div');
        listItem.className = 'announcement-item';
        listItem.innerHTML = `<p><strong>${announcement.date}</strong>: ${announcement.title}</p>`;
        announcementList.appendChild(listItem);
    });
}

async function displaySchedule() {
    const scheduleList = document.getElementById('schedule-list');
    for (const event of data) {
        const posterUrl = await getPosterImage(event.Title);
        const listItem = document.createElement('div');
        listItem.className = 'event-item';
        listItem.innerHTML = `
            <div class="poster-container">
                <img src="${posterUrl}" alt="${event.Title} Poster" class="event-poster">
                <div class="overlay">
                    <div class="overlay-text">${event.Date}: ${event.Title}</div>
                </div>
            </div>
        `;
        scheduleList.appendChild(listItem);
    }
}

function displayMembers() {
    const memberList = document.getElementById('member-list');
    Object.keys(memberMessages).forEach(member => {
        const listItem = document.createElement('div');
        listItem.className = 'member-item';
        listItem.textContent = member;

        // 클릭 시 새 페이지로 이동
        listItem.addEventListener('click', function () {
            window.location.href = `member_${member}.html`;
        });

        memberList.appendChild(listItem);
    });
}

function showFloatingMessage(member, element) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = memberMessages[member].join('<br>');
    element.appendChild(tooltip);
    tooltip.style.display = 'block';
}

function hideFloatingMessage(element) {
    const tooltip = element.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}
