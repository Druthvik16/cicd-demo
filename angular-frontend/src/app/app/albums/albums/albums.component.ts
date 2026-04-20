import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Album, AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albums: Album[] = [];
  loading = true;
  error = '';
  count = 0;
  version = '';
  deployedAt = '';

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.error = '';
    this.albumsService.getAlbums().subscribe({
      next: (res: any) => {
        this.albums = res.data.slice(0, 20); // show first 20
        this.count = res.count;
        this.version = res.version || '';
        this.deployedAt = res.deployedAt || '';
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load posts.';
        this.loading = false;
      },
    });
  }
}
