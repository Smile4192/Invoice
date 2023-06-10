import { Helmet } from 'react-helmet-async';
// @mui
import {
  Container,
  Grid,
  Card,
  Table,
  TableContainer,
  TableBody,
  Typography,
} from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// _mock_
import {
  _appPayment,
  _companyList,
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import Scrollbar from '../../components/scrollbar';
import {
  useTable,
  emptyRows,
  TableEmptyRows,
  TableHeadCustom,
} from '../../components/table';
// sections
import {
  AppWelcome,
  AppNewInvoice,
} from '../../sections/@dashboard/general/app';
import {
  AnalyticsWidgetSummary,
} from '../../sections/@dashboard/general/analytics';
// sections
import { UserCard } from '../../sections/@dashboard/user/cards';
import { CompanyTableRow } from '../../sections/@dashboard/company/list';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'company', label: 'Company', align: 'left' },
  { id: 'registry', label: 'Registry', align: 'left' },
  { id: 'taxID', label: 'Tax ID', align: 'left' },
  { id: 'creationDate', label: 'Creation Date', align: 'left' },
  { id: 'address', label: 'Address', align: 'center' },
  { id: 'partner', label: 'Partner', align: 'left' },
  { id: 'phoneNumber', label: 'Phone Number', align: 'left' },
];

export default function GeneralAppPage() {
  const {
    page,
    rowsPerPage,
    //
    onSort,
  } = useTable();

  const { user } = useAuthContext();

  const { themeStretch } = useSettingsContext();

  const tableData = _companyList;

  const Client = {
    avatarUrl: `https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_1.jpg`,
    cover: `https://api-dev-minimal-v4.vercel.app/assets/images/covers/cover_1.jpg`,
    name: `Sergey Romanov`,
    role: `Sales Manager`,
  }

  return (
    <>
      <Helmet>
        <title> General: App | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome
              title={`Hello, ${user?.displayName}. \n Welcome to your Dashboard!`}
              description="IF you have any question, feel free to Contact Us"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <UserCard user={Client} />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
                <Scrollbar>
                  <Typography sx={{ p: 3, fontWeight: 700 }}>
                    Company Information
                  </Typography>
                  <Table sx={{ minWidth: 800 }}>
                    <TableHeadCustom
                      headLabel={TABLE_HEAD}
                      rowCount={tableData.length}
                      onSort={onSort}
                    />

                    <TableBody>
                      <CompanyTableRow
                        row={_companyList[0]}
                      />

                      <TableEmptyRows
                        emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                      />

                    </TableBody>
                  </Table>
                </Scrollbar>
              </TableContainer>

            </Card>
          </Grid>

          <Grid item container xs={12} lg={6} spacing={3}>
            <Grid item xs={12} sm={6}>
              <AnalyticsWidgetSummary
                status="Payment OK"
                color='success'
                total={714.00}
                date="2023/06/08"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AnalyticsWidgetSummary
                status="Next Payment"
                color='primary'
                total={214.29}
                date="2023/06/08"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AnalyticsWidgetSummary
                status="Additional Services"
                color='error'
                total={714.00}
                date="2023/06/08"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <AnalyticsWidgetSummary
                status="Additional Services"
                color='error'
                total={714.00}
                date="2023/06/08"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            <AppNewInvoice
              title="Payment Information"
              tableData={_appPayment}
              tableLabels={[
                { id: 'date', label: 'Date' },
                { id: 'amount', label: 'Amount' },
                { id: 'status', label: 'Status' },
                { id: 'link', label: 'Payment Link' },
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
