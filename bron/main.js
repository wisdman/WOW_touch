export default {
	detailTemplate: "/templates/detail.njk",
	navTemplate: "/templates/nav.njk",

    renderDetail: async function(url, id) {
    	const response = await fetch(url + this.detailTemplate);
    	const nav = await fetch(url + this.navTemplate);
		const tpl = await response.text();
		const navTpl = await nav.text();
		return nunjucks.renderString(tpl, {baseUrl: url, id: parseInt(id), pagesNum: 19});
    }
}