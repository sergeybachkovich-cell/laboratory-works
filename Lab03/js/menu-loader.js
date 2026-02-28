(async () => {
    try {
        const response = await fetch('../includes/nav.html');
        if (!response.ok) throw new Error('Файл ../includes/nav.html  не найден, nav-menu не загружен!');
        const newNavMenu = await response.text();

        const navMenu = document.querySelector('#placeholder-nav');
        navMenu.innerHTML = newNavMenu;
    }

    catch {
        console.log('ошибка загрузки меню навигации');
    }
    
})();
