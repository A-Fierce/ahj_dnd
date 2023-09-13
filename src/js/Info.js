export default class Info {
  constructor() {
    this.fillInfoColumn();
  }

  fillInfoColumn() {
    const infoBoard = document.querySelector('.info-board');

    const InfoColumn = document.createElement('div');
    InfoColumn.className = 'info';
    infoBoard.append(InfoColumn);

    const header = document.createElement('h1');
    header.className = 'info-header';
    header.textContent = 'Welcome!';
    InfoColumn.append(header);

    const whereAreWe = document.createElement('p');
    whereAreWe.className = 'info-card';
    whereAreWe.textContent = 'Here is our simplified taskmanager.';
    InfoColumn.append(whereAreWe);

    const youCan = document.createElement('p');
    youCan.className = 'info-card';
    youCan.textContent = 'Here You can:';
    InfoColumn.append(youCan);

    const youCanList = document.createElement('ul');
    youCanList.className = 'can-do-list';
    InfoColumn.append(youCanList);

    const canAdd = document.createElement('li');
    canAdd.textContent = 'Add tasks by creating them into columns accordingly to their status!';
    youCanList.append(canAdd);

    const canRemove = document.createElement('li');
    canRemove.textContent = 'Remove any task if its time has come.';
    youCanList.append(canRemove);

    const canMove = document.createElement('li');
    canMove.textContent = 'Or you can just take any task and move it to another column if its status has already changed.';
    youCanList.append(canMove);

    const lastWord = document.createElement('p');
    lastWord.className = 'info-card';
    lastWord.textContent = 'We hope you will stay with us and have fun!';
    InfoColumn.append(lastWord);
  }
}
