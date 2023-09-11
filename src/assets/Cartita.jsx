import { Grommet, Heading, Card, CardBody, Button } from "grommet";
import { Favorite } from "grommet-icons"; // Corregir la importación aquí

function Box() {
  return (
    <Grommet className="Box">
      <Heading>Hola mundo :D</Heading>
      <Card>
        <CardBody pad="medium">Body</CardBody>
        <Button icon={<Favorite color="red" />} hoverIndicator />
      </Card>
    </Grommet>
  );
}

export default Box;
