// SPOLLERS ---------------------------------
const spollers = document.querySelectorAll('._spollers');

if (spollers.length > 0) {
    function initSpollers() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 992) {
            initSpollerBody();
            document.addEventListener("click", setSpollerAction);
        } else {
            initSpollerBody(false);
            document.removeEventListener("click", setSpollerAction);
        }
    }
    function initSpollerBody(matchWidth = true) {
        const spollerTitles = document.querySelectorAll('._spoller');
        spollerTitles.forEach(spollerTitle => {
            if (matchWidth) {
                if (!spollerTitle.classList.contains('_active')) {
                    spollerTitle.nextElementSibling.style.display = "none";
                }
            } else {
                spollerTitle.nextElementSibling.style.display = "";
            }
        });
    }
    function hideSpollersBody(spollers) {
        const spollerActiveTitle = spollers.querySelector('._spoller._active');
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
    }
    function setSpollerAction(e) {
        const el = e.target;
        if (el.classList.contains('_spoller')) {
            const onlyOne = el.closest('._spollers').classList.contains('_one') ? true : false;
            if (onlyOne && !el.classList.contains('_active')) {
                hideSpollersBody(el.closest('._spollers'));
            }
            el.classList.toggle('_active');
            _slideToggle(el.nextElementSibling, 500);
            e.preventDefault();
        }
    }
    const matchMedia = window.matchMedia("(max-width:992px)");
    matchMedia.addListener(function () {
        initSpollers();
    });
    initSpollers();
}
//========================================================================================================================================================

//========================================================================================================================================================
//  Search -----------------------------
const searchHeaderLink = document.querySelector('.actions-header__link_search');
const searchHeaderIcon = document.querySelector('._action-search');
const searchHeaderForm = document.querySelector('.form-header');


searchHeaderLink.addEventListener("click", function (e) {
    searchHeaderForm.classList.toggle('_active');
    // searchHeaderIcon.classList.toggle('_icon-search');
    // searchHeaderIcon.classList.toggle('_close');
});
searchHeaderIcon.addEventListener("click", function (e) {
    searchHeaderForm.classList.toggle('_active');
    // searchHeaderIcon.classList.toggle('_icon-search');
    // searchHeaderIcon.classList.toggle('_close');
});

document.addEventListener("keydown", function (e) {
    if (e.code === 'Escape') {
        searchHeaderForm.classList.remove('_active');
        // searchHeaderIcon.classList.remove('_close');
        // searchHeaderIcon.classList.toggle('_icon-search');
    }
});

document.addEventListener("click", function (e) {
    if (!e.target.closest('.form-header') && !e.target.classList.contains('actions-header__link_search') && !e.target.classList.contains('_action-search')) {
        searchHeaderForm.classList.remove('_active');
        // searchHeaderIcon.classList.remove('_close');
        // searchHeaderIcon.classList.add('_icon-search');
    }
});

// document.addEventListener("click", function (e) {
//     if (!e.target.closest('.form-header') && !e.target.classList.contains('_action-search')) {
//         searchHeaderForm.classList.remove('_active');
//         // searchHeaderIcon.classList.remove('_close');
//         // searchHeaderIcon.classList.add('_icon-search');
//     }
// });
//========================================================================================================================================================
