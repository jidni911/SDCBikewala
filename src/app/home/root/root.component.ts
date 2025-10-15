import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  products = [
    {
      name: 'Carbon Fiber Frame',
      desc: 'Ultra-light performance frame for serious riders.',
      price: '$799',
      image: 'assets/products/frame.jpg',
      delay: 100
    },
    {
      name: 'Pro Gear Set',
      desc: 'Smooth shifting for all terrains.',
      price: '$249',
      image: 'assets/products/gears.jpg',
      delay: 200
    },
    {
      name: 'All-Terrain Tires',
      desc: 'Durable grip with superior comfort.',
      price: '$99',
      image: 'assets/products/tires.jpg',
      delay: 300
    }
  ];

  services = [
    {
      title: 'Full Bike Servicing',
      desc: 'Complete maintenance to keep your bike in top shape.',
      icon: 'bi-gear-fill',
      delay: 100
    },
    {
      title: 'Custom Upgrades',
      desc: 'Tailor your ride with premium components.',
      icon: 'bi-tools',
      delay: 200
    },
    {
      title: 'Wheel Alignment',
      desc: 'Perfect balance for smoother rides.',
      icon: 'bi-bicycle',
      delay: 300
    }
  ];

  reviews = [
    { name: 'Rafiul Hasan', text: 'Best bike shop in town! Super friendly and expert service.', delay: 100 },
    { name: 'Tania Rahman', text: 'Got my custom setup done perfectly. Highly recommend!', delay: 200 },
    { name: 'Nayeem Islam', text: 'Affordable prices and quick turnaround time!', delay: 300 }
  ];

  ngOnInit() {
    AOS.init({ duration: 1000, once: true, offset: 120 });
  }
}
