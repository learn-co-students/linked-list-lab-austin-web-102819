function getName(node) {
    return node.name
}
function headNode(list, collection){
    return collection[list]
}
function next(node, collection){
    return collection[node.next]
}
function nodeAt(index, list, collection){
    let head = headNode(list, collection)
    
    for(let i=0; i<index; i++){
        head = next(head, collection)
    }
    return head
}
function addressAt(index, list, collection){
    if(index == 0){return list}
    return nodeAt(index-1, list, collection).next
}
function indexAt(node, collection, list){
    let head = headNode(list, collection)
    let index = 0;
    while(head.next){
        if(node.name === head.name){
            return index
        }
        head = next(head, collection)
        index += 1
    }
}
function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
}
function deleteNodeAt(index, list, collection){
    let prev = nodeAt(index - 1, list, collection)
    let pres = nodeAt(index, list, collection)
    prev.next = pres.next
}
