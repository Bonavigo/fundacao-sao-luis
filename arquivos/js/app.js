/* Por Bruno Bonavigo, 2023 */
/* APS UNIP - Marquês */
/* Membros do grupo: Bruno Bonavigo, Luís Rogério e Raimundo */

const FUNDACAO = {
	trocarPagina(pagina) {
		document.getElementById("inicial").style.display = 'none';
		document.getElementById("padroeiro").style.display = 'none';
		document.getElementById("metas").style.display = 'none';
		document.getElementById(pagina).style.display = 'block';
	}
}