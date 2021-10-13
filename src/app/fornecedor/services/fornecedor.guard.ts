import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LocalStorageUtils } from "src/app/utils/localstorage";

@Injectable()
export class FornecedorGuard implements CanActivate {

  localStorageUtil = new LocalStorageUtils();

  constructor(private router: Router) { }

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
