/*! randomly.js (git@github.com:geckotang/randomly.git)
 * lastupdate: 2013-11-07
 * version: 0.0.0
 * author: @geckotang
 * License: MIT */
(function(window, document, undefined){
	"use strict";

	var Randomly = function(array) {
		this.init(array);
	};

	// @param array {Array} シャッフルしたい配列
	// @return {Object} 自分自身
	Randomly.prototype.init = function(array) {
		var that = this;
		that.array = array;
		return that;
	};

	// @param array {Array} シャッフルしたい配列
	// @return {Object} 自分自身
	Randomly.prototype.setArray = function(array) {
		var that = this;
		that.array = array;
		return that;
	};

	// @return {Array}
	Randomly.prototype.getArray = function() {
		var that = this;
		return that.array;
	};

	// 配列から無作為にnumの数だけ抽出する
	// @param num {Number} 抽出したい数
	// @return {Object} 該当したもの(result.matched{Array})と、それ以外(result.unmached{Array})をオブジェクトで返す。
	Randomly.prototype.pickout = function(num) {
		var that = this;
		var array = that.getArray().concat();
		var mached = [];
		var loopNum = (num < array.length) ? num : array.length ;

		while (loopNum-- > 0) {
			var i = Math.random() * array.length | 0;
			mached.push(array[i]);
			array.splice(i, 1);
		}

		return {
			mached: mached,
			unmached: array
		};
	}

	window.Randomly = Randomly;

}(window, window.document));
