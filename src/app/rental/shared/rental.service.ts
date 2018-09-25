import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { setTimeout } from 'timers';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: '1',
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice Apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '2',
      title: 'Central Apartment 2',
      city: 'San Francisco',
      street: 'Main Street',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very Nice Condo',
      dailyRate: 12,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '3',
      title: 'Central Apartment 3',
      city: 'Bratsliva',
      street: 'Hlavna',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very Nice Condo',
      dailyRate: 334,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '4',
      title: 'Central Apartment 4',
      city: 'Berlin',
      street: 'Haupt Street',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice House',
      dailyRate: 33,
      shared: true,
      createdAt: '24/12/2017'
    }
  ];

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>(observer => {
      setTimeout(() => {
        const foundRental = this.rentals.find(rental => {
          return rental.id === rentalId;
        });

        observer.next(foundRental);
      }, 500);
    });
  }

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
    });
  }
}
