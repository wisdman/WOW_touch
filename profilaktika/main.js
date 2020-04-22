export default {
	detailTemplate: "/templates/detail.njk",

    renderDetail: async function(url, id) {
    	const response = await fetch(url + this.detailTemplate);
		const tpl = await response.text();
		console.log(id);
		return nunjucks.renderString(tpl, {baseUrl: url, id: parseInt(id)});
    }
}