import React, {useEffect, useState} from "react";
import {Bar, Line, Pie} from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement
} from 'chart.js';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Row, Spinner,
  Table,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {chartExample1, chartExample2, chartExample3, chartExample4,} from "variables/charts.js";
import Board from "../components/Table/Board";
import {useSelector} from "react-redux";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Dashboard(props) {
  const [chartData, setChartData] = useState({});
  const [pieData, setPieData] = useState({});
  const [data, setData] = useState({});
  const stateColumn = useSelector(state => state.columns)
  const stateTasks = useSelector(state => state.tasks)


  useEffect(() => {
    const modifiedData1 = {
      ...chartExample2,
      datasets: [
        {
          ...chartExample1.datasets[0],
          data: [stateColumn[0].taskIds.length, stateColumn[1].taskIds.length, stateColumn[2].taskIds.length],
          pointBackgroundColor: [
            "rgba(29,140,248,0.5)",
            "rgba(247,65,197,0.5)",
            "rgba(0,246,201,0.5)",
          ],
        },
      ],
    };
    setChartData(modifiedData1)

    const modifiedData2 = {
      ...chartExample2,
      datasets: [
        {
          ...chartExample2.datasets[0],
          borderWidth: 0,
          data: [stateColumn[0].taskIds.length, stateColumn[1].taskIds.length, stateColumn[2].taskIds.length],
        }
      ],
    };
    setPieData(modifiedData2)
    const modifiedData4 = {
      ...chartExample4,
      datasets: [
        {
          ...chartExample4.datasets[0],
          data: [stateColumn[2].taskIds.length,],
        }
      ],
    };

    setData(modifiedData4)



  }, [stateColumn]);


  return (
    <>
      <div className="content">
        <Board />
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {Object.keys(chartData).length !== 0 ? (
                      <Line
                          data={chartData}
                          options={chartExample1.options}
                      />
                  ) : (
                      <Spinner
                          color="light"
                          size=""
                      >
                        Loading...
                      </Spinner>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> {stateTasks.length}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {Object.keys(pieData).length !== 0 ? (
                      <Pie
                          data={pieData}
                          options={chartExample2.options}
                      />
                  ) : (
                      <Spinner
                          color="light"
                          size=""
                      >
                        Loading...
                      </Spinner>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  {stateTasks.length}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {Object.keys(pieData).length !== 0 ? (
                      <Bar
                          data={pieData}
                          options={chartExample3.options}
                      />
                  ) : (
                      <Spinner
                          color="light"
                          size=""
                      >
                        Loading...
                      </Spinner>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> {stateColumn[2].taskIds.length}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {Object.keys(data).length !== 0 ? (
                      <Line
                          data={data}
                          options={chartExample4.options}
                      />
                  ) : (
                      <Spinner
                          color="light"
                          size=""
                      >
                        Loading...
                      </Spinner>
                  )}

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Tasks({stateTasks.length})</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                    {stateTasks ?
                      stateTasks.map(e => (
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                <span className="check" />
                              </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">{e.content}</p>
                            <p className="text-muted">
                              lorem
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      )):
                        <Spinner color="light">loading</Spinner>
                    }
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
