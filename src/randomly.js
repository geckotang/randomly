(function(window, document, undefined){
	"use strict";

	function Randomly(element, opts) {
		return (this instanceof Randomly)
			? this.init(array)
			: new Randomly(array);
	};

	Randomly.prototype.init = function(array) {
		var that = this;
		that.items = array;
		return that;
	};

	// 配列から無作為にnumの数だけ抽出する
	// @param num {Number} 抽出したい数
	// @return result {Object} 該当したもの(result.matched)と、それ以外(result.unmached)をオブジェクトで返す。
	Randomly.prototype.pickout = function(num) {
		var that = this;
		var items = that.items.concat();
		var mached = [];
		var unmached = [];

		return {
			mached: mached,
			unmached: unmached
		};
	};

	window.Randomly = Randomly;

}(window, window.document));
