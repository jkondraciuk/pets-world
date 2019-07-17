<template>
    <div class="about-wrapper">
        <div class="about__container">
            <h1 class="about__header">Who made this page?</h1>
            <div class="about__image">
                <img class="about__image-img" src="@/assets/img/author.jpg" alt="Author">
            </div>
            <p class="about__check">Check @jkondraciuk on GitHub</p>
            <p class="about__text">Here's my portfolio with all the projects I made</p>
            <ul class="about__contact">
                <li class="about__contact-item">
                    <p class="about__contact-paragraph">
                        E-mail:
                        <a href="" class="about__contact-link">kondraciuk.dev@gmail.com</a>
                    </p>
                </li>
                <li class="about__contact-item">
                    <p class="about__contact-paragraph">
                        Phone:
                        <a href="" class="about__contact-link">576 035 485</a>
                    </p>
                </li>
                <li class="about__contact-item">
                    <p class="about__contact-paragraph">
                        Facebook:
                        <a href="" class="about__contact-link">Kuba Kondraciuk</a>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style src="./About.scss" lang="scss" scoped />>