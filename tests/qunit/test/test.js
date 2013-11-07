test( "window.Randomlyがあるか", function() {
	ok( window.Randomly, "window has Randomly" );
});

test( "instanceof Randomly", function() {
	ok( new Randomly([0,1,2]) instanceof Randomly, "Passed! new Randomly([0,1,2]) instanceof Randomly" );
});

test( "結果のオブジェクトがmachedとunmachedを所持しているか", function() {
	var rnd = new Randomly([0,1,2,3,4,5]);
	var result = rnd.pickout(1);

	ok( result.mached, "result has mached" );
	ok( result.unmached, "result has unmached" );
});

test( "結果の数は正しいか1(元の配列の数=抽出した数+抽出してない数)", function() {
	var array = [0,1,2,3,4,5];
	var rnd = new Randomly(array);
	var result = rnd.pickout(1);

	ok( result.mached.length === 1, "result.mached.length equal 1" );
	ok( result.unmached.length === 5, "result.unmached.length equal 5" );
});

test( "結果の数は正しいか2(元の配列の数=抽出した数+抽出してない数)", function() {
	var array = [0,1,2,3,4,5];
	var rnd = new Randomly(array);
	var result = rnd.pickout(4);

	ok( result.mached.length === 4, "result.mached.length equal 4" );
	ok( result.unmached.length === 2, "result.unmached.length equal 2" );
});

test( "結果の数は正しいか3(元の配列の数=抽出した数+抽出してない数)", function() {
	var array = [0,1,2,3,4,5];
	var rnd = new Randomly(array);
	var result = rnd.pickout(10);

	ok( result.mached.length === 6, "result.mached.length equal 4" );
	ok( result.unmached.length === 0, "result.unmached.length equal 2" );
});

test( "Randomly.getArrayでRandomly.arrayを取得できているか", function() {
	var array1 = [0,1,2,3,4,5];
	var rnd = new Randomly(array1);

	deepEqual(array1, rnd.getArray(), "rnd.getArray returned array1" );
	deepEqual(rnd.array, rnd.getArray(), "rnd.getArray returned rnd.array" );
});

test( "Randomly.setArrayでRandomly.arrayを上書きできているか", function() {
	var array1 = [0,1,2,3,4,5];
	var array2 = [1,2,3,4,5,6];
	var rnd = new Randomly(array1);

	rnd.setArray(array2);
	notDeepEqual(Randomly.array, array1, "setArray overwrite rnd.array" );
});
