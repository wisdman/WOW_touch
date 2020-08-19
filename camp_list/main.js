export default {
	contentFile: "/src/output.json",
	listTemplate: "/templates/list.njk",
	detailTemplate: "/templates/detail.njk",
	navTemplate: "/templates/nav-slide.njk",

	getList: async function(url) {
		console.log(url + this.contentFile);
		let response = await fetch(url + this.contentFile);

		if (response.ok) { // если HTTP-статус в диапазоне 200-299
		  // получаем тело ответа (см. про этот метод ниже)
		  let json = await response.json();
		  return json;
		} else {
		  console.log("Ошибка HTTP: " + response.status);
		}
	},

	renderList: async function(url) {
    	const response = await fetch(url + this.listTemplate);
		const tpl = await response.text();
		const content = await this.getList(url);
		return nunjucks.renderString(tpl, {baseUrl: url, items: content});
    },

    renderNav: async function(url) {
    	const response = await fetch(url + this.navTemplate);
		const tpl = await response.text();
		const content = await this.getList(url);
		return nunjucks.renderString(tpl, {baseUrl: url, items: content});
    },

    renderDetail: async function(url, id) {
    	const response = await fetch(url + this.detailTemplate);
    	const nav = await fetch(url + this.navTemplate);
		const tpl = await response.text();
		const navTpl = await nav.text();
		const content = await this.getList(url);
		const item = content[id];
		return nunjucks.renderString(navTpl, {baseUrl: url, items: content, id: id}) + nunjucks.renderString(tpl, {baseUrl: url, ...item, id: id});
    }
}