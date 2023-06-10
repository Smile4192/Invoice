import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  CardHeader,
  TableContainer,
} from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';
import { TableHeadCustom } from '../../../../components/table';
import Label from '../../../../components/label';

// ----------------------------------------------------------------------

AppNewInvoice.propTypes = {
  title: PropTypes.string,
  tableData: PropTypes.array,
  subheader: PropTypes.string,
  tableLabels: PropTypes.array,
};

export default function AppNewInvoice({ title, subheader, tableData, tableLabels, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row) => (
                <AppNewInvoiceRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

AppNewInvoiceRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.number,
    status: PropTypes.string,
    link: PropTypes.string,
  }),
};

function AppNewInvoiceRow({ row }) {
  return (
    <TableRow>
      <TableCell>{row.id}</TableCell>

      <TableCell>{fCurrency(row.amount)}</TableCell>

      <TableCell align="left">
        <Label
          variant="soft"
          color={(row.status === 'Failed' && 'error') || 'success'}
          sx={{ textTransform: 'capitalize' }}
        >
          {row.status}
        </Label>
      </TableCell>

      <TableCell>
        <Button
            size="small"
            color="inherit"
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            link={row.link}
          >
            View more
          </Button>
        </TableCell>
    </TableRow>
  );
}
