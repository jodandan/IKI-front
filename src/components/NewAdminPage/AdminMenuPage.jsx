import { useParams, Link } from "react-router-dom";
import React, { useState } from 'react';
import { Box, PlusBtn, Btn, DeleteBtn, PopupBox } from "./AdminPageStyleComponent";


export default function AdminMenuPage() {

    const { category_id } = useParams();//url주소 얻기
    console.log(`현재 카테고리id:${category_id}의 메뉴들`)
    //서버로부터 category_id의 메뉴들 받기
    const menuId = [1, 2, 3, 4, 5];

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedMenuId, setSelectedMenuId] = useState(null); // 수정 대상 메뉴의 ID

    const handleAddMenuButtonClick = () => {
        setIsAddModalOpen(true);
    };

    const handleEditMenuButtonClick = (menuId) => {
        // TODO: menuId에 해당하는 메뉴 정보를 가져와서 수정 모달에 뿌려주는 코드 작성

        setSelectedMenuId(menuId);
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setSelectedMenuId(null);
        //새로고침으로 get받아오기
    };


    return (
        <div>
            현재 카테고리 (ID: {category_id})에 대한 모든 메뉴
            <PlusBtn onClick={handleAddMenuButtonClick}>메뉴 추가</PlusBtn>
            <div>
                {menuId.map(menuid => ( // 여기서 중괄호가 아닌 괄호로 수정
                    <Box key={menuid}>
                        <div>메뉴(id:{menuid})에 대한 정보 나열</div>
                        <DeleteBtn>메뉴 삭제</DeleteBtn>
                        <Btn onClick={() => handleEditMenuButtonClick({menuid})}>메뉴 정보 수정</Btn>
                        <Link
                            to={`/admin/${category_id}/${menuid}`}
                            style={{ textDecoration: 'none', color: 'black' }}>
                            {/* 카테고리 삭제 */}
                            <Btn>메뉴 옵션 관리하기</Btn>
                        </Link>
                    </Box> // key prop 추가하여 각 항목에 고유 키 부여
                ))}
            </div>
            {isAddModalOpen && <AddMenuModal onClose={handleCloseModal} />}
            {isEditModalOpen && selectedMenuId && (
                <EditMenuModal menuId={selectedMenuId} menuName="Menu Name" menuPrice={5000} menuSoldOut={false} onClose={handleCloseModal} />
            )}
        </div>
    )
}


const AddMenuModal = ({ onClose }) => {
    const [menuName, setMenuName] = useState('');
    const [menuPrice, setMenuPrice] = useState('');

    const handleMenuNameChange = (e) => {
        setMenuName(e.target.value);
    };

    const handleMenuPriceChange = (e) => {
        setMenuPrice(e.target.value);
    };

    const handleAddMenu = () => {
        // TODO: 메뉴를 추가하는 기능을 수행하는 코드 작성
        console.log(`메뉴:${menuName}/가격:${menuPrice} 추가 완료`);
        // 모달 창 닫기
        onClose();
    };

    return (
        <PopupBox>
            <h2>Add Menu</h2>
            <input type="text" placeholder="Menu Name" value={menuName} onChange={handleMenuNameChange} />
            <input type="number" placeholder="Menu Price" value={menuPrice} onChange={handleMenuPriceChange} />
            <button onClick={handleAddMenu}>Add</button>
            <button onClick={onClose}>Cancel</button>
        </PopupBox>
    );
};

const EditMenuModal = ({ menuId, menuName, menuPrice, menuSoldOut, onClose }) => {
  const [menuData, setMenuData] = useState({
    name: menuName,
    price: menuPrice,
    soldOut: menuSoldOut,
  });

  const handleMenuDataChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setMenuData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleEditMenu = () => {
    // TODO: 메뉴를 수정하는 기능을 수행하는 코드 작성
    console.log(menuData); // 예시: 수정된 메뉴 정보를 콘솔에 출력

    // 모달 창 닫기
    onClose();
  };

  return (
    <PopupBox>
      <h2>Edit Menu</h2>
      <input type="text" name="name" value={menuData.name} onChange={handleMenuDataChange} />
      <input type="number" name="price" value={menuData.price} onChange={handleMenuDataChange} />
      <label>
        Sold Out:
        <input
          type="checkbox"
          name="soldOut"
          checked={menuData.soldOut}
          onChange={handleMenuDataChange}
        />
      </label>
      <button onClick={handleEditMenu}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </PopupBox>
  );
};