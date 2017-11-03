/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  theiaStickySidebar: any;
}

/**
 * The Lory carousel
 *
 */
declare class Lory {

  /**
   * Goes to the prev slide
   *
   */
  prev() : void

  /**
   * Goes to the next slide
   *
   */
  next() : void

  /**
   * Goes to the specified index
   *
   * @param index the index
   */
  slideTo(index: number) : void

  /**
   * Destroys the carouse
   *
   */
  destroy() : void

  returnIndex(): number;

  addEventListener(event: string, handleDotEvent);
}

/**
* The constructor of the carousel
*
*/
declare function lory(el: any, options?: any) : Lory
