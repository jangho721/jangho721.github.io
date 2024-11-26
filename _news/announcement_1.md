---
layout: post
date: 2024-11-25 00:00:00+0900
inline: true
related_posts: false
---

<style>
    .expandable {
        color: white;
    }

    .expandable:hover {
        text-decoration: underline;
    }
</style>

<div>
    <div class="expandable" onclick="toggleContent(this)">[2024 and Before]</div>
    
    <div class="content" style="display: none;">
        <ul style="padding-left: 30px;">
            <li>[Nov 2024]&nbsp; Start my personal page!</li>
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
