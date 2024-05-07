import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'product-detail', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'product-cart', loadChildren: () => import('./product-cart/product-cart.module').then(m => m.ProductCartModule) },
  { path: 'product-checkout', loadChildren: () => import('./product-checkout/product-checkout.module').then(m => m.ProductCheckoutModule) },
  { path: 'gallary', loadChildren: () => import('./gallary/gallary.module').then(m => m.GallaryModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'mycart', loadChildren: () => import('./my-cart/my-cart.module').then(m => m.MyCartModule) },
  { path: 'myorder', loadChildren: () => import('./my-order/my-order.module').then(m => m.MyOrderModule) },
  { path: 'about-info', loadChildren: () => import('./about-info/about-info.module').then(m => m.AboutInfoModule) },
  { path: 'adminuserinfo', loadChildren: () => import('./admin-userinfo/admin-userinfo.module').then(m => m.AdminUserinfoModule) },
  { path: 'adminorderstatus', loadChildren: () => import('./admin-orderstatus/admin-orderstatus.module').then(m => m.AdminOrderstatusModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }, // 404 handling,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
