import { MigrationInterface, QueryRunner } from 'typeorm'

interface Car {
 model: string
 manufacturer: string
 description: string
 rentPrice: number
 igniteTime: number
 maxPassengers: number
 maxSpeed: number
 fuelType: string
 cambioMode: string
 horsePower: number
 thumbs: string[]
}

interface User {
 firstName: string
 lastName: string
 cnh: number
 email: string
 password: string
 avatar: string
}

export class seedCarsTable1667762832527 implements MigrationInterface {
  private cars: Car[] = [
    {
      model: 'Dodge Hellcat',
      manufacturer: 'Chrysler',
      description:
    'The Dodge Brand offers countless ways to personalize your Challenger. Find a package that fits your style and performance needs.',
      rentPrice: 29999,
      maxPassengers: 5,
      maxSpeed: 327,
      fuelType: 'diesel',
      igniteTime: 3.6,
      cambioMode: 'automatic',
      horsePower: 807,
      thumbs: ['https://i.ibb.co/ftHQDpj/dodge.png'],
    },
    {
      model: 'Huracan',
      manufacturer: 'Lamborghini',
      description:
    'The Lamborghini Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air and tame the road, you’ll get a thrill just by looking at it. The only thing better than taking in this beauty from a distance is actually touching it. The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality.',
      rentPrice: 29999,
      maxPassengers: 2,
      maxSpeed: 325,
      fuelType: 'diesel',
      igniteTime: 3.1,
      cambioMode: 'automatic',
      horsePower: 640,
      thumbs: ['https://i.ibb.co/CMhD8Lx/lambu.png'],
    },
    {
      model: 'Uno de Firma',
      manufacturer: 'Fiat',
      description:
    'Fiat Uno Com Escada no Teto ou simplesmente "Fiat Uno de Firma" é mais um mito das Ruas Brasileiras com entrega de TV por assinatura e manutenção de rede elétrica e telefônica, com sua escada no teto que dá Mais de 8000 km/h para a sua diversão.',
      rentPrice: 29999,
      maxPassengers: 2,
      maxSpeed: 325,
      fuelType: 'diesel',
      igniteTime: 3.1,
      cambioMode: 'automatic',
      horsePower: 640,
      thumbs: ['https://i.ibb.co/tcwhDkK/audi-q3.png'],
    },
  ]

  private dummyUser: User = {
    firstName: 'Salompas',
    lastName: 'Senpai',
    cnh: 91474828182882222.2,
    email: 'salompas_senpai@rentx.dev',
    password: '123456',
    avatar: 'https://github.com/xSallus.png',
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const queryPromises = this.cars.map((car) => {
      const {
        model,
        manufacturer,
        description,
        rentPrice,
        maxPassengers,
        maxSpeed,
        fuelType,
        igniteTime,
        cambioMode,
        horsePower,
        thumbs,
      } = car

      const id = model
        .replace(' ', '_')
        .toUpperCase()
        .concat(Date.now().toString())

      return queryRunner.query(
        `INSERT INTO cars (id, model, manufacturer, description, rentPrice, maxPassengers, maxSpeed, fuelType, igniteTime, cambioMode, horsePower, thumbs) VALUES ('${id}', '${model}', '${manufacturer}', '${description}', ${rentPrice}, ${maxPassengers}, ${maxSpeed}, '${fuelType}', ${igniteTime}, '${cambioMode}', ${horsePower}, '${thumbs.join(
          ' '
        )}')`
      )
    })

    const { firstName, lastName, cnh, email, password, avatar } = this.dummyUser

    const userId = `${firstName}_${lastName}_${Date.now()}`.toUpperCase()

    const userPromise = queryRunner.query(
      `INSERT INTO customers (id, firstName, lastName, cnh, email, password, avatar) VALUES ('${userId}', '${firstName}', '${lastName}', ${cnh}, '${email}', '${password}', '${avatar}')`
    )

    await Promise.all([...queryPromises, userPromise])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM cars')
    await queryRunner.query('DELETE FROM customers')
  }
}
