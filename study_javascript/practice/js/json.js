const item = {
  name: 'Computer',
  price: 100000,
  parts: ['CPU', 'メモリ', 'HDD'],
};

item['sale'] = true;
item['salePrice'] = 50000


if(item['sale']) {
  document.getElementById('pc').textContent = `商品名は${item.name}、お値段はセール開催中につき ${item.salePrice}円になります`;
}
else {
  document.getElementById('pc').textContent = `商品名は${item.name}、お値段は ${item.price}円になります`;
}

const computerText = (element) => {
  let texts = '';
  for (let i = 0; i < item['parts'].length; i++) {
    texts += i === item['parts'].length - 1 ? `${item['parts'][i]}` : `${item['parts'][i]}・`;
  }
  document.getElementById(element).classList.toggle('active');
  document.getElementById(element).textContent = `${item['name']}のパーツは${texts}です`;
};
document.getElementById('question').addEventListener('click', () => {
  computerText('parts');
});
