import React, { useState } from 'react';
import { Avatar, Table, Text, TextDropdownButton } from 'evergreen-ui';

import useSortableData from '../../hooks/useSortableData';
import { order } from '../../constants';

const tableHeadColumn = ['Cases', 'Deaths', 'Recovered', 'Active', 'Tests', 'Population'];

function AdvancedTable({ countries }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filter = (countries) => {
        const searchQueryTrim = searchQuery.trim();

        if (searchQueryTrim.length === 0) return countries;

        return countries.filter(({ country }) =>
            country.toLowerCase().includes(searchQueryTrim.toLowerCase()));
    };

    const { items, requestSort, sortConfig } = useSortableData(filter(countries));

    const getIconForOrder = (currentOrder) => {
        switch (currentOrder) {
            case order.asc:
                return 'arrow-up';
            case order.desc:
                return 'arrow-down';
            default:
                return 'double-caret-vertical';
        }
    };

    const handleFilterChange = (value) => setSearchQuery(value);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <Table border>
            <Table.Head height={50}>
                <Table.SearchHeaderCell
                    value={searchQuery}
                    onChange={handleFilterChange}
                    placeholder='Search by country...'
                />
                {tableHeadColumn.map((column) => (
                    <Table.TextHeaderCell key={column}>
                        <TextDropdownButton
                            icon={getIconForOrder(getClassNamesFor(column.toLowerCase()))}
                            onClick={() => requestSort(column.toLowerCase())}
                        >
                            {column}
                        </TextDropdownButton>
                    </Table.TextHeaderCell>
                ))}
            </Table.Head>
            <Table.VirtualBody height={430}>
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