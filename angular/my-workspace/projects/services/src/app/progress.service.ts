import { EventEmitter } from '@angular/core';

export class ProgressService {

  private prg: number = 0

  private em: EventEmitter<number> = new EventEmitter()

  constructor() { }

  plus() {
    this.em.emit(this.prg++)
  }

  minus() {
    this.em.emit(this.prg--)
  }

  onProgress(fn: (affsadf: number) => void) {
    this.em.subscribe(fn)
  }
}
