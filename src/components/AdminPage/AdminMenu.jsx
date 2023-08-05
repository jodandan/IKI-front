import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import { PlusBtn, Btn, DeleteBtn } from "./adminItems/AdminButtonCSS";
import { Box } from "./adminItems/AdminContainerCSS";
import menuData from "./DummyData/MenusByCategoryId.json";
import { AddMenuModal, EditMenuModal } from "./adminItems/ModalForMenu";

export default function AdminMenu() {
  const { category_id } = useParams(); //url주소 얻기
  console.log(`현재 카테고리id:${category_id}의 메뉴들`);
  //서버로부터 category_id의 메뉴들 받기

  const menuDatas = menuData; //category_id로 서버로부터 정보 get

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState(null); // 수정 대상 메뉴의 ID
  const [selectedMenuData, setSelectedMenuData] = useState({
    name: "",
    price: null,
    soldOut: null,
  });
  const handleAddMenuButtonClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEditMenuButtonClick = (menuId, menuData) => {
    setSelectedMenuId(menuId);
    setSelectedMenuData(menuData);
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
      {menuDatas.responseData.categoryName} (ID: {category_id})에 대한 모든 메뉴
      <PlusBtn onClick={handleAddMenuButtonClick}>메뉴 추가</PlusBtn>
      <div>
        {menuDatas.responseData.menusList.map(
          (
            item // 여기서 중괄호가 아닌 괄호로 수정
          ) => (
            <Box key={item.menusId}>
              <div>
                {item.menusName}(id:{item.menusId}) 가격:{item.menusPrice}{" "}
                품절여부: {item.soldOut ? "품절" : "재고있음"}
              </div>
              <DeleteBtn>메뉴 삭제</DeleteBtn>
              <Btn
                onClick={() =>
                  handleEditMenuButtonClick(item.menusId, {
                    name: item.menusName,
                    price: item.menusPrice,
                    soldOut: item.soldOut,
                  })
                }
              >
                메뉴 정보 수정
              </Btn>
              <Link
                to={`/admin/${category_id}/${item.menusId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {/* 카테고리 삭제 */}
                <Btn>메뉴 옵션 관리하기</Btn>
              </Link>
            </Box> // key prop 추가하여 각 항목에 고유 키 부여
          )
        )}
      </div>
      {isAddModalOpen && <AddMenuModal onClose={handleCloseModal} />}
      {isEditModalOpen && selectedMenuId && (
        <EditMenuModal
          menuId={selectedMenuId}
          selectedMenuData={selectedMenuData}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
