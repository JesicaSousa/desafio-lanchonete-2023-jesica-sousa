
export { CaixaDaLanchonete };

class Cardapio {
    constructor() {
        this.produtos = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50};

        this.extras = {
            chantily: "cafe",
            queijo: "sanduiche"};
    } //primeiro inserir o nome e valor dos produtos

    getItemPrice(num) {
        return this.items[num] || null;} //metodo para recuperar o valor

    isExtra(num) {
        return !!this.extras[num];} //metodo que verificar se NÃO há extras no pedido

    getPrincipalForExtra(num) {
        return this.extras[num];}} // metodo que verifica se há produtos extras no pedido

class CaixaDaLanchonete {
    constructor() {
        this.cardapio = new Cardapio();} //constructor para definir o padrão para cardápio

    totalDopedido(pagamento, produtos) {
        let total = 0;

        if (produtos.length === 0) return "Não há itens no carrinho de compra!";
        if (!['debito', 'credito', 'dinheiro'].includes(pagamento)) return "Forma de pagamento inválida!";
        
        for (let produto of produtos) {
            const [codigo, qtd] = produto.split(',');

            if (!this.cardapio.getItemPrice(num)) return "Item inválido!";
            if (Number(qtd) <= 0) return "Quantidade inválida!";
            if (this.cardapio.isExtra(num) && !produtos.some(i => i.startsWith(this.cardapio.getPrincipalForExtra(num)))) {
                return "Item extra não pode ser pedido sem o principal";}

            soma += this.cardapio.getItemPrice(num) * Number(qtd);} 

        if (Pagamento === 'dinheiro') {
            total *= 0.95;} else if (Pagamento === 'credito') {soma *= 1.03;}

        return `R$ ${soma.toFixed(2).replace('.', ',')}`;} // metodo que calcula o valor total do pedido com descontos e taxas, também com extras ou não
}
// @autor Jesica Sousa
/******** legenda: 
 * num = numero do item pedido
 * Cardipio = nome da classe cardapio
 * produto = nome do objeto produto que possui nome e preços dos produtos
 * extras = valor do produto extras
 * qtd = quantidade
 * Total do pedido = método para verificar o valor total do pedido
 * cardapio = intancia da classe cardápio
*/
