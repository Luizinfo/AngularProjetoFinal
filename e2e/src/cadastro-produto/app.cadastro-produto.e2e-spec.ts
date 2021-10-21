import { AppProdutoPage } from './app.cadastro-produto.po';
import { browser, logging } from 'protractor';

describe('Testes do formulario de cadastro', () => {
  let page: AppProdutoPage;

  beforeEach(() => {
    page = new AppProdutoPage();
  });

  it('deve navegar até produtos', (done) => {
    page.iniciarNavegacao();
    expect(page.obterTituloProdutos()).toEqual('Lista de Produtos');
    done();
  });

  it('deve preencher formulário de produtos com sucesso', (doneFn) => {

    page.navegarParaNovoProduto();
    page.selecionarFornecedor();

    page.nome.sendKeys('Produto Teste Automatizado');
    page.descricao.sendKeys('Produto \nTeste Automatizado');
    page.selecionarImagem();
    page.valor.sendKeys('1234,50');
    page.ativo.click(); //desativar
    page.ativo.click();//ativar novamente
    page.botaoProduto.click();

    page.esperar(6000);

    expect(page.obterTituloProdutos()).toEqual('Lista de Produtos');
    doneFn();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
