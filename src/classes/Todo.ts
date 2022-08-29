
class Todo implements TodoItem {
    id: number;
    content: string;
    isFinished: boolean;
    category: string;
    tags: any;
    
    constructor()
    {
        this.id = 0;
        this.content = '';
        this.isFinished = false;
        this.category = '';
        this.tags = null;
    }

    /**
     * 새로운 Todo 생성
     * @param {string} content - 할일 내용
     * @param {string} category - 할일 카테고리
     * @param {any} tags - 할일 태그
     * @return {number} 새로 생성된 할일 id
     */
    create(content: string, category: string, tags: any): number {
        return 1; //new id
    }

    /**
     * Todo 읽기
     * @param {number} id - 읽어올 Todo id
     * @return {TodoItem} 할일
     */
    read(id: number): TodoItem {
        return this;
    }

    /**
     * Todo 수정
     * @param {number} id - 수정할 Todo id
     * @param {string} content - 수정할 Todo 내용
     * @param {boolean} isFinished - 수정할 Todo의 완료 여부
     * @param {string} category - 수정할 Todo 카테고리
     * @param {any} tags - 수정할 Todo 태그
     * @return {boolean} 수정 성공 여부
     */
    update(id: number, content: string, isFinished: boolean, category: string, tags: any): boolean {
        return true;
    }

    /**
     * Todo 삭제
     * @param {number} id - 삭제할 Todo id
     * @return {boolean} 삭제 성공 여부
     */
    delete(id: number): boolean {
        return true;
    }
}