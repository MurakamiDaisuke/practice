document.addEventListener('DOMContentLoaded', function(){
	// タブに対してクリックイベントを適用
	const tabs = document.getElementsByClassName('content-word');
    console.log(tabs)
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', changeTab);
	}
	// タブをクリックすると実行する関数
	function changeTab () {
        $(".content-word").removeClass('is-active');
		$(this).addClass('is-active');
		const index = $(".content-word").index(this);
		console.log(index);
		// $(".content-word").addClass("is-active");
		$(".panel").removeClass("is-show").eq(index).addClass("is-show");
	};
});
