/*
steam_achievements_list_generator
https://github.com/desc70865/steam_achievements_list_generator
generate BBcode table of steam achievements (text&images)
with opening url like "https://steamcommunity.com/stats/[appid]/achievements/"
*/

var images = document.querySelectorAll("div.achieveImgHolder img")//icon_current
var images_0 = document.querySelectorAll("div.compareImg.compare_rightcol_element img")//icon_compared
var text = document.querySelectorAll("div.achieveTxt")//text
var table = []
for (var i = 0; i < images.length; i++) {
	table.push('[tr=silver]--[td=1,2][align=center][img]'+images_0[i].src+'[/img][/align][/td][td][b]--'+text[i].children[0].innerText+'--[/b][/td][td][b]--A--[/b][/td][td=1,2][align=center][img]--'+images[i].src+'--[/img][/align][/td][/tr]\n[tr=silver]--[td][b]--'+text[i].children[1].innerText+'--[/b][/td][td][b]--B--[/b][/td][/tr]');
//by replace "--" to use it directly, or instead of using '\t' to reform into other style
}
console.log('[table=60%]\n'+table.join('\n')+'\n[/table]')
