import React, { Component } from 'react';
import './OrderList.css';

class OrderList extends Component {

  render() {
    // const orders = [
    //   {
    //     key: 1,
    //     name: "one",
    //     order: "hey",
    //   },
    //   {
    //     key: 2,
    //     name: "two",
    //     order: "hey",
    //   },
    //   {
    //     key: 3,
    //     name: "three",
    //     order: "hey",
    //   },
    //   {
    //     key: 4,
    //     name: "four",
    //     order: "hey",
    //   },
    //   {
    //     key: 5,
    //     name: "five",
    //     order: "hey",
    //   }];
    // const listItems = orders.map((number) =>
    //   <li key={number.key}>
    //     {number.name}
    //   </li>
    // );
    return (
      <div>
        <vaadin-grid items='[{"name": "John", "surname": "Lennon", "role": "singer"},{"name": "Ringo", "surname": "Starr", "role": "drums"}]'>
          <vaadin-grid-column>
            <template className="header">Name</template>
            <template>[[item.name]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template className="header">Surname</template>
            <template>[[item.surname]]</template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template className="header">Role</template>
            <template>[[item.role]]</template>
          </vaadin-grid-column>
        </vaadin-grid>
        {/* <ul>{listItems}</ul> */}
        {/* <vaadin-grid items="[[users.result]]">
          <vaadin-grid-column width="50px" flex-grow="0">
            <template className="header">#</template>
            <template>[[index]]</template>

            <template className="footer">#</template>
          </vaadin-grid-column>

          <vaadin-grid-column>
            <template className="header">
              <span draggable="true">
                First Name
          </span>
            </template>
            <template>
              <span draggable="true">
                [[item.firstName]]
          </span>
            </template>
            <template className="footer">First Name</template>
          </vaadin-grid-column>

          <vaadin-grid-column>
            <template className="header">Last Name</template>
            <template>[[item.lastName]]</template>
            <template className="footer">Last Name</template>
          </vaadin-grid-column>

          <vaadin-grid-column width="150px">
            <template className="header">Address</template>
            <template>
              <p style={{whiteSpace: 'normal'}}>[[item.address.street]], [[item.address.city]]</p>
            </template>
            <template className="footer">Address</template>
          </vaadin-grid-column>

        </vaadin-grid> */}
      </div>
    );
  }
}

export default OrderList;
