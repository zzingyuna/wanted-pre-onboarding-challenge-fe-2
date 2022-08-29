interface TodoItem {
    /** @type {number} */
    id: number,
    /** @type {string} */
    content: string,
    /** @type {boolean} */
    isFinished: boolean,
    /** @type {string} */
    category: string,
    /** @type {any} */
    tags: any,
    
    /**
     * 새로운 Todo 생성
     * @type { (content: string, category: string, tags: any) => number }
     */
    create(content: string, category: string, tags: any): number,
    
    /**
     * Todo 읽기
     * @type { (id: number) => TodoItem }
     */
    read(id: number): TodoItem,
    
    /**
     * Todo 수정
     * @type { (id: number, content: string, isFinished: boolean, category: string, tags: any) => boolean }
     */
    update(id: number, content: string, isFinished: boolean, category: string, tags: any): boolean,
    
    /**
     * Todo 삭제
     * @type { (id: number) => boolean }
     */
    delete(id: number): boolean
  }
