/** 
 * Js 实现线性表结构
 * 
 * 分为顺序结构和链式结构
 * 
 * 顺序结构优点：方便存储、方便查询（时间复杂度为O(1)）
 * 顺序结构缺点：不利于插入和删除 插入和删除的时间复杂度为O(n)
 * 适用场景：频繁存储、查询，低频插入和删除。例如用户数据表
 * 
 * 链式结构优点: 方便插入和删除  时间复杂度为O(1)
 * 链式结构缺点：不利于查询和存储，因为存储时需要预留空间  查询时间复杂度为O(n)
 * 适用场景：高频插入删除 低频查询 。例如相册
 *   
 *  
 * 
*/



class ListNode{
    constructor(){
        this.list = []
    }
    getItem(index) {
        return this.list[index]    
    }
    push(item){
        return this.list.push(item) 
    }
    deletItem(index){
        if(this.list.length > 0){
            this.splice(index, 1)
        }
    }
}


class Node{
    constructor(key){
        this.next = null;
        this.key = key;
    }
}


class LinkList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    append(node){
        let current;
        if(this.head){
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node
        }else{
            this.head = node
        }
        this.length++;
    }
    removeAt(index){
        if (index > -1 && index < this.length) {
            let current = this.head;
            if (index == 0) {
                this.head = this.head.next
            }else{
                let previous;
                for (let i=0;i <= index; i++){                    
                    if (i == index) {
                        previous.next = current.next
                    }else{
                        previous = current
                        current = current.next
                    }
                }
            }
            this.length--;
        }
    }
    insert(position, nodes){
        if(position > -1 && position < this.length){
            let current = this.head;
            for(let i=0; i<=position; i++){
                if (i == position) {
                    let last = current.next
                    for(let j=0; j< nodes.length;j++){
                        current.next = nodes[j]
                        current = nodes[j]
                        this.length ++;
                    }                    
                    current.next = last
                    if (curren.next) {
                        this.length++;
                    }
                } else {
                    current = current.next    
                }
            }
        }
    }

}

