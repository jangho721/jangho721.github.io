---
layout: post
date: 2024-1-1 00:00:00+0000
inline: true
related_posts: false
---

<style>
    :root {
        --expandable-color: #f29105;
        --expandable-hover-color: #f29105;
    }

    html[data-theme="dark"] {
        --expandable-color: var(--global-theme-color);
        --expandable-hover-color: var(--global-hover-color);
    }

    .expandable {
        color: var(--expandable-color);
    }

    .expandable:hover {
        text-decoration: underline;
        color: var(--expandable-hover-color);
    }
</style>

<div>
    <div class="expandable" onclick="toggleContent(this)">[2024 and Before]</div>
    
    <div class="content" style="display: none;">
        <ul style="padding-left: 30px;">
            <li>[Jan 2023] Joined TmaxEduAI as a Machine Learning Engineer!</li>
            <li>[Mar 2022] A poster paper got accepted to <a href="https://www.asms.org/" target="_blank">ASMS</a> '22.</li>
            <li>[Sep 2020] I started as a MS student in Artificial Intelligence at Hanyang Univ!</li>
        </ul>
        <!--
        <p>
            Hoodie Thundercats retro, tote bag 8-bit Godard craft beer gastropub. Truffaut Tumblr taxidermy,
            raw denim Kickstarter sartorial dreamcatcher.
        </p>
        -->
    </div>
</div>

<script>
    // 클릭 시 Before 콘텐츠를 열고 닫는 함수
    function toggleContent(element) {
        const content = element.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none"; // 닫기
        } else {
            content.style.display = "block"; // 열기
        }
    }
</script>
