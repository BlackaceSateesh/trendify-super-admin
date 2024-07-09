import { FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

// delivery order status dummy data here

export const deliveryStatusColumnsAr = {
  data: [
    {
      id: 1,
      productName: "Samsung S22 ultra ",
      productId: "PID - IPT1268P ",
      productImg: require("../../assests/dashboard/productImg.png"),
      orderDate: "Order Date: 01/06/2024 2:00pm ",
      shipBy: "Ship by: 05/07/2024 9:00am",
      deliveryName: "Rajat P.",
      deliveryAdd: "08 Gujar Pura , Huzur ,Peer Gate , Bhopal.",
      items: [{ itemName: "Samsung Galaxy S22 Ultra" }],
      warehouse: "1 Product | Warehouse-MP MP-0001 BHP01",
      package: "Delhivery Small Box L 28 x W 11 x H 16 cm 3.50kg",
      deliveryType: "Express Delivery (1 day delivery)",
      payment: "Paid by UPI",
      action: [],
    },
    {
      id: 2,
      productName: "Samsung S22 ultra ",
      productId: "PID - IPT1268P ",
      productImg: require("../../assests/dashboard/productImg.png"),
      orderDate: "Order Date: 01/06/2024 2:00pm ",
      shipBy: "Ship by: 05/07/2024 9:00am",
      deliveryName: "Rajat P.",
      deliveryAdd: "08 Gujar Pura , Huzur ,Peer Gate , Bhopal.",
      items: [{ itemName: "Samsung Galaxy S22 Ultra" }],
      warehouse: "1 Product | Warehouse-MP MP-0001 BHP01",
      package: "Delhivery Small Box L 28 x W 11 x H 16 cm 3.50kg",
      deliveryType: "Express Delivery (1 day delivery)",
      payment: "Paid by UPI",
      action: [],
    },
    {
      id: 3,
      productName: "Samsung S22 ultra ",
      productId: "PID - IPT1268P ",
      productImg: require("../../assests/dashboard/productImg.png"),
      orderDate: "Order Date: 01/06/2024 2:00pm ",
      shipBy: "Ship by: 05/07/2024 9:00am",
      deliveryName: "Rajat P.",
      deliveryAdd: "08 Gujar Pura , Huzur ,Peer Gate , Bhopal.",
      items: [{ itemName: "Samsung Galaxy S22 Ultra" }],
      warehouse: "1 Product | Warehouse-MP MP-0001 BHP01",
      package: "Delhivery Small Box L 28 x W 11 x H 16 cm 3.50kg",
      deliveryType: "Express Delivery (1 day delivery)",
      payment: "Paid by UPI",
      action: [],
    },
    {
      id: 4,
      productName: "Samsung S22 ultra ",
      productId: "PID - IPT1268P ",
      productImg: require("../../assests/dashboard/productImg.png"),
      orderDate: "Order Date: 01/06/2024 2:00pm ",
      shipBy: "Ship by: 05/07/2024 9:00am",
      deliveryName: "Rajat P.",
      deliveryAdd: "08 Gujar Pura , Huzur ,Peer Gate , Bhopal.",
      items: [{ itemName: "Samsung Galaxy S22 Ultra" }],
      warehouse: "1 Product | Warehouse-MP MP-0001 BHP01",
      package: "Delhivery Small Box L 28 x W 11 x H 16 cm 3.50kg",
      deliveryType: "Express Delivery (1 day delivery)",
      payment: "Paid by UPI",
      action: [],
    },
    {
      id: 5,
      productName: "Samsung S22 ultra ",
      productId: "PID - IPT1268P ",
      productImg: require("../../assests/dashboard/productImg.png"),
      orderDate: "Order Date: 01/06/2024 2:00pm ",
      shipBy: "Ship by: 05/07/2024 9:00am",
      deliveryName: "Rajat P.",
      deliveryAdd: "08 Gujar Pura , Huzur ,Peer Gate , Bhopal.",
      items: [{ itemName: "Samsung Galaxy S22 Ultra" }],
      warehouse: "1 Product | Warehouse-MP MP-0001 BHP01",
      package: "Delhivery Small Box L 28 x W 11 x H 16 cm 3.50kg",
      deliveryType: "Express Delivery (1 day delivery)",
      payment: "Paid by UPI",
      action: [],
    },
  ],
};

export const deliveryStatusColumns = {
  column: [
    {
      name: "Order",
      selector: (row) => (
        <div className="orderDetailsPic">
          <div className="productImg">
            <img src={row.productImg} alt="" />
          </div>
          <div className="orderTXT">
            <p>{row.productName}</p>
            <p>{row.productId}</p>
          </div>
        </div>
      ),
    },
    {
      name: "Date",
      selector: (row) => (
        <div className="orderDetails">
          <p>{row.orderDate}</p>
          <p>{row.shipBy}</p>
        </div>
      ),
    },
    {
      name: "Delivery",
      selector: (row) => (
        <div className="orderDetails">
          <p>{row.deliveryName}</p>
          <p>{row.deliveryAdd}</p>
        </div>
      ),
    },
    {
      name: "Items",
      selector: (row) => (
        <div className="orderDetails">
          {" "}
          {row.items.map((e, i) => {
            return (
              <>
                <p>{e.itemName}</p>
              </>
            );
          })}
        </div>
      ),
    },
    {
      name: "Warehouse",
      selector: (row) => row.warehouse,
    },
    {
      name: "Package",
      selector: (row) => row.package,
    },
    {
      name: "Delivery Type",
      selector: (row) => row.deliveryType,
    },
    {
      name: "Payment",
      selector: (row) => row.payment,
    },
    {
        name: 'Action',
        selector: row => <div className="actionBtns"><button><FiEye /></button><button><MdDeleteOutline /></button></div>,
    },
  ],
};
