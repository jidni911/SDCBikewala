import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  // ✅ Products
  products = [
    {
      name: 'Pro Gear Set',
      price: '$89.99',
      image: 'assets/parts/gear.jpg',
      desc: 'Smooth shifting and long-lasting durability for mountain riders.'
    },
    {
      name: 'Hydraulic Brake System',
      price: '$129.99',
      image: 'assets/parts/brake.jpg',
      desc: 'Top-tier braking performance for any terrain.'
    },
    {
      name: 'Titanium Chain',
      price: '$59.99',
      image: 'assets/parts/chain.jpg',
      desc: 'Lightweight and ultra-strong titanium chain.'
    }
  ];

  // ✅ Services
  services = [
    {
      icon: 'bi-tools',
      title: 'Full Bike Servicing',
      desc: 'Complete inspection and fine-tuning for smoother, faster rides.'
    },
    {
      icon: 'bi-bicycle',
      title: 'Custom Builds',
      desc: 'Build your dream cycle with top-tier components and expert guidance.'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Quick Fixes',
      desc: 'Need urgent repairs? Our express service gets you back fast.'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
}
