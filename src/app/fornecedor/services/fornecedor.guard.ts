import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageUtils } from "src/app/utils/localstorage";
import { NovoComponent } from "../novo/novo.component";

@Injectable()
export class FornecedorGuard implements CanActivate, CanDeactivate<NovoComponent> {

  localStorageUtil = new LocalStorageUtils();

  constructor(private router: Router) { }
  canDeactivate(component: NovoComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {

if(component.mudancasNaoSalvas){
  return window.confirm('Tem certeza que deseja abandonar o formulário?');
}
return true;

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.localStorageUtil.obterTokenUsuario()) {
      this.router.navigate(['conta/login']);
    }

    let user = this.localStorageUtil.obterUsuario();
    let claim: any = route.data[0];

    if (claim !== undefined) {
      let claim = route.data[0]['claim'];
      if (claim) {
        if (!user.claims) {
          this.navegarAcessoNegado();
        }

        let userClaims = user.claims.find(x => x.type === claim.nome);

        if (!userClaims) {
          this.navegarAcessoNegado();
        }

        let valorClaim = userClaims.value as String;

        if (!valorClaim.includes(claim.valor)) {
          this.navegarAcessoNegado();
        }
      }
    }

    return true;
  }

  navegarAcessoNegado() {
    this.router.navigate(['acesso-negado']);
  }

}
