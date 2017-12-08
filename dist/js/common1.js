/*
	封装通过ID获取HTML元素
*/
function $(id) {
	return document.getElementById(id);
}

/*
	过滤敏感词
	input：被过滤的字符串
	sensitiveWords：敏感词
	replace：被替换后的词语
*/
function filterWords(input, sensitiveWords, replace) {
	/*if( input.indexOf(sensitiveWords) !== -1 ) {
		input = input.replace(sensitiveWords, replace);
	}*/

	while(input.indexOf(sensitiveWords) !== -1) {
		input = input.replace(sensitiveWords, replace);
	}

	return input;
}