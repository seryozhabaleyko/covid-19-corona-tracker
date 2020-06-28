import React, { useState } from 'react';
import { Avatar, Menu, Popover, Position, Table, Text, TextDropdownButton } from 'evergreen-ui';

const Order = { NONE: 'NONE', ASC: 'ASC', DESC: 'DESC' };

const { BOTTOM_RIGHT } = Position;

const MenuOptionsGroup = [
    { label: 'Ascending', value: Order.ASC },
    { label: 'Descending', value: Order.DESC },
];

const tableHeadCell = [
    { label: 'Cases', column: 2 },
    { label: 'Deaths', column: 3 },
    { label: 'Recovered', column: 4 },
    { label: 'Active', column: 5 },
    { label: 'Tests', column: 6 },
    { label: 'Population', column: 7 },
];

function AdvancedTable({ countries }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [ordering, setOrdering] = useState(Order.NONE);
    const [orderedColumn, setOrderedColumn] = useState(1);

    const sort = (countries) => {
        if (ordering === Order.NONE) return countries;

        const currentPropKey = tableHeadCell.filter(({ label, column: currentColumn }) => currentColumn === orderedColumn);
        const propKey = currentPropKey[0].label.toLowerCase() || 'country';

        switch (ordering) {
            case Order.NONE:
                return countries.sort((a, b) => a.country < b.country ? -1 : 1);
            case Order.ASC:
                return countries.sort((a, b) => b[propKey] - a[propKey]);
            case Order.DESC:
                return countries.sort((a, b) => a[propKey] - b[propKey]);
            default:
                return countries;
        }
    };

    const filter = (countries) => {
        const searchQueryTrim = searchQuery.trim();

        if (searchQueryTrim.length === 0) return countries;

        return countries.filter(({ country }) =>
            country.toLowerCase().includes(searchQueryTrim.toLowerCase()));
    };

    const getIconForOrder = (order) => {
        switch (order) {
            case Order.ASC:
                return 'arrow-up';
            case Order.DESC:
                return 'arrow-down';
            default:
                return 'caret-down';
        }
    };

    const handleFilterChange = (value) => setSearchQuery(value);

    const items = filter(sort(countries));

    return (
        <Table border>
            <Table.Head height={50}>
                <Table.SearchHeaderCell
                    value={searchQuery}
                    onChange={handleFilterChange}
                    placeholder='Search by country...'
                />
                {tableHeadCell.map(({ label, column: currentColumn }) => (
                    <Table.TextHeaderCell key={currentColumn}>
                        <Popover
                            position={BOTTOM_RIGHT}
                            content={({ close }) => (
                                <Menu>
                                    <Menu.OptionsGroup
                                        title="Order"
                                        options={MenuOptionsGroup}
                                        selected={
                                            orderedColumn === currentColumn
                                                ? ordering
                                                : null
                                        }
                                        onChange={value => {
                                            setOrderedColumn(currentColumn);
                                            setOrdering(value);
                                            // Close the popover when you select a value.
                                            close();
                                        }}
                                    />
                                </Menu>
                            )}
                        >
                            <TextDropdownButton
                                icon={
                                    orderedColumn === currentColumn
                                        ? getIconForOrder(ordering)
                                        : 'caret-down'
                                }
                            >
                                {label}
                            </TextDropdownButton>
                        </Popover>
                    </Table.TextHeaderCell>
                ))}
            </Table.Head>
            <Table.VirtualBody height={400}>
                {items.map(({ country, countryInfo, cases, deaths, recovered, active, tests, population }) => (
                    <Table.Row key={country} isSelectable onSelect={() => alert(country)}>
                        <Table.Cell display="flex" alignItems="center">
                            <Avatar src={countryInfo.flag} name={country}/>
                            <Text marginLeft={8} size={300} fontWeight={500}>{country}</Text>
                        </Table.Cell>
                        <Table.TextCell isNumber>{cases?.toLocaleString()}</Table.TextCell>
                        <Table.TextCell isNumber>{deaths?.toLocaleString()}</Table.TextCell>
                        <Table.TextCell isNumber>{recovered?.toLocaleString()}</Table.TextCell>
                        <Table.TextCell isNumber>{active?.toLocaleString()}</Table.TextCell>
                        <Table.TextCell isNumber>{tests?.toLocaleString()}</Table.TextCell>
                        <Table.TextCell isNumber>{population?.toLocaleString()}</Table.TextCell>
                    </Table.Row>
                ))}
            </Table.VirtualBody>
        </Table>
    );
}

export default AdvancedTable;