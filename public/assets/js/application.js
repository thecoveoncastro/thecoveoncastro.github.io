// back to top button - docs
$(function () {
  $('.nav-link').click(function() {
    const listContainer = $('.navbar-nav');
    const previousActiveItem = listContainer.attr('data-active');
    const navItemId = `${this.getAttribute('id')}`;
    const navItem = $(`#${navItemId}`);

    $(`#${previousActiveItem}`).removeClass('active');
    navItem.addClass('active');
    listContainer.attr('data-active', navItemId);
  }); 
})

