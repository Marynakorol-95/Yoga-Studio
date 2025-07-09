<script>
  document.addEventListener('DOMContentLoaded', function () {
    const menuOpenBtn = document.querySelector('.menu-open-btn');
    const menuCloseBtn = document.querySelector('.menu-close-btn');
    const mobileMenu = document.querySelector('.mob-menu');

    menuOpenBtn.addEventListener('click', () => {
      mobileMenu.classList.add('is-open');
    });

    menuCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });

    // Закриття меню по кліку на посилання
    const menuLinks = document.querySelectorAll('.mob-menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
      });
    });
  });
</script>