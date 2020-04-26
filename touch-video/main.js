export default {
	detailTemplate: "/templates/detail.njk",

    renderDetail: async function(url) {
    	const response = await fetch(url + this.detailTemplate);
		const tpl = await response.text();
		return nunjucks.renderString(tpl, {baseUrl: url});
    }
}